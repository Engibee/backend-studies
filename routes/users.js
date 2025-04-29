// routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /users
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

module.exports = router;