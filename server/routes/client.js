const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { authMiddleware } = require('../middleware/auth');

router.use(authMiddleware);

// Мої замовлення
router.get('/my-orders', (req, res) => {
    db.query(
        'SELECT * FROM orders WHERE client_id = ? ORDER BY created_at DESC',
        [req.user.id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

module.exports = router;