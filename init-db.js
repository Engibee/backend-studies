// init-db.js
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function initDb() {
  try {
    console.log('Iniciando configuração do banco de dados...');
    
    // Lê o arquivo SQL
    const sqlFilePath = path.join(__dirname, 'setup.sql');
    const sqlScript = fs.readFileSync(sqlFilePath, 'utf8');
    
    // Executa o script SQL
    await pool.query(sqlScript);
    
    console.log('Banco de dados configurado com sucesso!');
  } catch (err) {
    console.error('Erro ao configurar o banco de dados:', err);
  } finally {
    // Fecha a conexão com o pool
    await pool.end();
  }
}

// Executa a função de inicialização
initDb();
