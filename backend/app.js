const express = require('express');
const expressGraphQL = require('express-graphql');

const contatoSchema = require('./schemas/contato');
require('./db');

const app = express();

app.use(
    '/graphql',
    expressGraphQL({
        schema: contatoSchema,
        graphiql: true
      })
);

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => console.log(`App iniciado na porta ${PORTA}`));