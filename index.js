const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const usersRoutes = require('./routes/users');
const rootRoutes = require('./routes'); // assume que seja ./routes/index.js

app.use(express.json());

app.use('/', rootRoutes);

app.use('/users', usersRoutes); // agora temos /users como rota principal

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});