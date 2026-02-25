const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { authMiddleware } = require('../middleware/auth');

// GET всі теми (публічно)
router.get('/topics', (req, res) => {
    db.query(`
    SELECT ft.*, u.name as user_name, u.role as user_role,
    (SELECT COUNT(*) FROM forum_comments fc WHERE fc.topic_id = ft.id) as comment_count,
    (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='topic' AND fr.target_id=ft.id AND fr.type='heart') as heart_count,
    (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='topic' AND fr.target_id=ft.id AND fr.type='thumbsup') as thumbsup_count,
    (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='topic' AND fr.target_id=ft.id AND fr.type='handshake') as handshake_count
    FROM forum_topics ft
    JOIN users u ON ft.user_id = u.id
    ORDER BY ft.created_at DESC
  `, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// GET одна тема з коментарями (публічно)
router.get('/topics/:id', (req, res) => {
    db.query(`
        SELECT ft.*, u.name as user_name, u.role as user_role,
        (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='topic' AND fr.target_id=ft.id AND fr.type='heart') as heart_count,
        (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='topic' AND fr.target_id=ft.id AND fr.type='thumbsup') as thumbsup_count,
        (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='topic' AND fr.target_id=ft.id AND fr.type='handshake') as handshake_count
        FROM forum_topics ft JOIN users u ON ft.user_id = u.id WHERE ft.id = ?`,
        [req.params.id], (err, topics) => {
            if (err || !topics[0]) return res.status(404).json({ error: 'Not found' });
            db.query(`
      SELECT fc.*, u.name as user_name, u.role as user_role,
      (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='comment' AND fr.target_id=fc.id AND fr.type='heart') as heart_count,
      (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='comment' AND fr.target_id=fc.id AND fr.type='thumbsup') as thumbsup_count,
      (SELECT COUNT(*) FROM forum_reactions fr WHERE fr.target_type='comment' AND fr.target_id=fc.id AND fr.type='handshake') as handshake_count
      FROM forum_comments fc JOIN users u ON fc.user_id = u.id
      WHERE fc.topic_id = ? ORDER BY fc.created_at ASC
    `, [req.params.id], (err2, comments) => {
                res.json({ topic: topics[0], comments });
            });
        });
});

// POST нова тема
router.post('/topics', authMiddleware, (req, res) => {
    const { title, body } = req.body;
    db.query('INSERT INTO forum_topics (user_id, title, body) VALUES (?, ?, ?)',
        [req.user.id, title, body], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, id: result.insertId });
        });
});

// PATCH редагувати тему
router.patch('/topics/:id', authMiddleware, (req, res) => {
    const { title, body } = req.body;
    const check = req.user.role === 'admin' ? '1=1' : `user_id = ${req.user.id}`;
    db.query(`UPDATE forum_topics SET title=?, body=? WHERE id=? AND ${check}`,
        [title, body, req.params.id], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        });
});

// DELETE видалити тему
router.delete('/topics/:id', authMiddleware, (req, res) => {
    const check = req.user.role === 'admin' ? '1=1' : `user_id = ${req.user.id}`;
    db.query(`DELETE FROM forum_topics WHERE id=? AND ${check}`, [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// POST новий коментар
router.post('/topics/:id/comments', authMiddleware, (req, res) => {
    const { text } = req.body;
    db.query('INSERT INTO forum_comments (topic_id, user_id, text) VALUES (?, ?, ?)',
        [req.params.id, req.user.id, text], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, id: result.insertId });
        });
});

// PATCH редагувати коментар
router.patch('/comments/:id', authMiddleware, (req, res) => {
    const { text } = req.body;
    const check = req.user.role === 'admin' ? '1=1' : `user_id = ${req.user.id}`;
    db.query(`UPDATE forum_comments SET text=? WHERE id=? AND ${check}`,
        [text, req.params.id], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        });
});

// DELETE видалити коментар
router.delete('/comments/:id', authMiddleware, (req, res) => {
    const check = req.user.role === 'admin' ? '1=1' : `user_id = ${req.user.id}`;
    db.query(`DELETE FROM forum_comments WHERE id=? AND ${check}`, [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// POST реакція — один тип на вибір, перемикання між типами
router.post('/react', authMiddleware, (req, res) => {
    const { target_type, target_id, type } = req.body;
    const userId = req.user.id;

    // Перевіряємо чи вже є реакція (будь-якого типу)
    db.query(
        'SELECT id, type FROM forum_reactions WHERE user_id=? AND target_type=? AND target_id=?',
        [userId, target_type, target_id],
        (err, existing) => {
            if (existing && existing[0]) {
                if (existing[0].type === type) {
                    // Той самий тип — знімаємо реакцію
                    db.query('DELETE FROM forum_reactions WHERE id=?', [existing[0].id], () => {
                        res.json({ action: 'removed', type });
                    });
                } else {
                    // Інший тип — замінюємо
                    db.query(
                        'UPDATE forum_reactions SET type=? WHERE id=?',
                        [type, existing[0].id],
                        () => res.json({ action: 'changed', type })
                    );
                }
            } else {
                // Немає реакції — додаємо
                db.query(
                    'INSERT INTO forum_reactions (user_id, target_type, target_id, type) VALUES (?,?,?,?)',
                    [userId, target_type, target_id, type],
                    () => res.json({ action: 'added', type })
                );
            }
        }
    );
});

// GET реакції юзера
router.get('/my-reactions', authMiddleware, (req, res) => {
    db.query(
        'SELECT target_type, target_id, type FROM forum_reactions WHERE user_id=?',
        [req.user.id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

module.exports = router;