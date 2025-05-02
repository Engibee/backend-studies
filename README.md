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

#### Endpoints RESTful Padrão
- **GET /users** - Listar todos os usuários
- **GET /users/:id** - Obter um usuário específico
- **POST /users** - Criar um novo usuário
  - Body: `{ "name": "Nome do Usuário", "email": "email@exemplo.com" }`
- **PUT /users/:id** - Atualizar um usuário existente
  - Body: `{ "name": "Novo Nome", "email": "novoemail@exemplo.com" }`
- **DELETE /users/:id** - Excluir um usuário

#### Endpoints via URL (Sem necessidade de corpo da requisição)
- **GET /users/create?name=Nome&email=email@exemplo.com** - Criar um novo usuário via URL
- **GET /users/update/5?name=NovoNome&email=novo@exemplo.com** - Atualizar um usuário via URL
- **GET /users/delete/5** - Excluir um usuário via URL

## Exemplos de Uso

### Usando Endpoints RESTful Padrão

#### Criar um novo usuário (POST)

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Novo Usuário", "email": "novo@email.com"}'
```

#### Listar todos os usuários (GET)

```bash
curl http://localhost:3000/users
```

#### Atualizar um usuário (PUT)

```bash
curl -X PUT http://localhost:3000/users/5 \
  -H "Content-Type: application/json" \
  -d '{"name": "Nome Atualizado", "email": "atualizado@email.com"}'
```

#### Excluir um usuário (DELETE)

```bash
curl -X DELETE http://localhost:3000/users/5
```

### Usando Endpoints via URL

#### Criar um novo usuário via URL

```bash
curl "http://localhost:3000/users/create?name=Novo%20Usuario&email=novo@email.com"
```

#### Atualizar um usuário via URL

```bash
curl "http://localhost:3000/users/update/5?name=Nome%20Atualizado&email=atualizado@email.com"
```

#### Excluir um usuário via URL

```bash
curl "http://localhost:3000/users/delete/5"
```

### Acessando via Navegador

Você também pode acessar diretamente pelo navegador:

- Para listar usuários: http://localhost:3000/users
- Para criar um usuário: http://localhost:3000/users/create?name=Novo%20Usuario&email=novo@email.com
- Para atualizar um usuário: http://localhost:3000/users/update/5?name=Nome%20Atualizado&email=atualizado@email.com
- Para excluir um usuário: http://localhost:3000/users/delete/5

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- dotenv (para variáveis de ambiente)
