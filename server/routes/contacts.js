const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Отримати всі заявки
router.get('/', (req, res) => {
    db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Додати заявку
router.post('/', (req, res) => {
    const { name, email, phone, service, message } = req.body;
    db.query(
        'INSERT INTO contacts (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)',
        [name, email, phone, service, message],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, id: result.insertId });
        }
    );
});

module.exports = router;