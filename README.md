# Backend Studies - RESTful API

Uma API RESTful simples construída com Node.js, Express e PostgreSQL.

## Configuração

1. Certifique-se de ter o Node.js e o PostgreSQL instalados
2. Clone este repositório
3. Instale as dependências: `npm install`
4. Configure o arquivo `.env` com suas credenciais do PostgreSQL
5. Inicialize o banco de dados: `npm run init-db`
6. Inicie o servidor: `npm run dev`

## Endpoints da API

### Usuários

- **GET /users** - Listar todos os usuários
- **GET /users/:id** - Obter um usuário específico
- **POST /users** - Criar um novo usuário
  - Body: `{ "name": "Nome do Usuário", "email": "email@exemplo.com" }`
- **PUT /users/:id** - Atualizar um usuário existente
  - Body: `{ "name": "Novo Nome", "email": "novoemail@exemplo.com" }`
- **DELETE /users/:id** - Excluir um usuário

## Exemplo de Uso

### Criar um novo usuário

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Novo Usuário", "email": "novo@email.com"}'
```

### Listar todos os usuários

```bash
curl http://localhost:3000/users
```

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- dotenv (para variáveis de ambiente)
