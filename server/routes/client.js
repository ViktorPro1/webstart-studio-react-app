const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

// Мої замовлення
router.get('/my-orders', (req, res) => {
    db.query(
        'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
        [req.user.id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

// Створити замовлення
router.post('/orders', (req, res) => {
    const { service, notes } = req.body;
    db.query(
        'INSERT INTO orders (user_id, title, status, notes) VALUES (?, ?, "new", ?)',
        [req.user.id, service, notes || ''],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, id: result.insertId });
        }
    );
});

// Отримати повідомлення
router.get('/messages', (req, res) => {
    db.query(
        'SELECT * FROM messages WHERE user_id = ? ORDER BY created_at ASC',
        [req.user.id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

// Відправити повідомлення
router.post('/messages', (req, res) => {
    const { text } = req.body;
    db.query(
        'INSERT INTO messages (user_id, sender, text) VALUES (?, "client", ?)',
        [req.user.id, text],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, id: result.insertId });
        }
    );
});

module.exports = router;