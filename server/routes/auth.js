const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/connection');

// Реєстрація
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Перевіряємо чи існує email
        db.query('SELECT id FROM users WHERE email = ?', [email], async (err, results) => {
            if (results.length > 0) {
                return res.status(400).json({ error: 'Email вже використовується' });
            }

            // Хешуємо пароль
            const hashedPassword = await bcrypt.hash(password, 10);

            // Зберігаємо користувача
            db.query(
                'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [name, email, hashedPassword],
                (err, result) => {
                    if (err) return res.status(500).json({ error: err.message });

                    const token = jwt.sign(
                        { id: result.insertId, email, role: 'client' },
                        process.env.JWT_SECRET,
                        { expiresIn: '7d' }
                    );

                    res.json({ success: true, token, user: { id: result.insertId, name, email, role: 'client' } });
                }
            );
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Логін
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(400).json({ error: 'Невірний email або пароль' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Невірний email або пароль' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });
    });
});

// Перевірка токена (хто я?)
router.get('/me', require('../middleware/auth').authMiddleware, (req, res) => {
    db.query('SELECT id, name, email, role FROM users WHERE id = ?', [req.user.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
});

module.exports = router;