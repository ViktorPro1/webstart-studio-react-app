const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// Всі роути захищені — тільки для адміна
router.use(authMiddleware, adminMiddleware);

// Всі заявки
router.get('/contacts', (req, res) => {
    db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Всі користувачі
router.get('/users', (req, res) => {
    db.query('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Змінити статус заявки
router.patch('/contacts/:id', (req, res) => {
    const { status } = req.body;
    db.query(
        'UPDATE contacts SET status = ? WHERE id = ?',
        [status, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

// Видалити заявку
router.delete('/contacts/:id', (req, res) => {
    db.query('DELETE FROM contacts WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Створити замовлення для клієнта
router.post('/orders', (req, res) => {
    const { client_id, service, notes, file_url } = req.body;
    db.query(
        'INSERT INTO orders (client_id, service, notes, file_url) VALUES (?, ?, ?, ?)',
        [client_id, service, notes, file_url],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, id: result.insertId });
        }
    );
});

// Оновити статус замовлення
router.patch('/orders/:id', (req, res) => {
    const { status, notes, file_url } = req.body;
    db.query(
        'UPDATE orders SET status = ?, notes = ?, file_url = ? WHERE id = ?',
        [status, notes, file_url, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

// Всі замовлення
router.get('/orders', (req, res) => {
    db.query(
        `SELECT orders.*, users.name as client_name, users.email as client_email 
     FROM orders JOIN users ON orders.client_id = users.id 
     ORDER BY orders.created_at DESC`,
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

router.delete('/orders/:id', (req, res) => {
    db.query('DELETE FROM orders WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

module.exports = router;