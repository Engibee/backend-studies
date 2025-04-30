-- setup.sql
-- Script para criar a tabela de usuários se ela não existir

-- Verifica se a tabela users existe e cria se não existir
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insere alguns dados de exemplo se a tabela estiver vazia
INSERT INTO users (name, email)
SELECT 'Usuário Exemplo', 'exemplo@email.com'
WHERE NOT EXISTS (SELECT 1 FROM users LIMIT 1);

INSERT INTO users (name, email)
SELECT 'Maria Silva', 'maria@email.com'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'maria@email.com');

INSERT INTO users (name, email)
SELECT 'João Santos', 'joao@email.com'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'joao@email.com');
