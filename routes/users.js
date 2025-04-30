// routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /users - List all users
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// GET /users/:id - Get a specific user
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao buscar usuário específico:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// POST /users - Create a new user
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  // Validação básica
  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  try {
    const result = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// PUT /users/:id - Update a user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  // Validação básica
  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  try {
    const result = await db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// DELETE /users/:id - Delete a user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json({ message: 'Usuário excluído com sucesso', deletedUser: result.rows[0] });
  } catch (err) {
    console.error('Erro ao excluir usuário:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

module.exports = router;