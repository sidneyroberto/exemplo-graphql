const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

require('./db');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: erro => ({
      message: erro.message,
      locations: erro.locations,
      stack: erro.stack ? erro.stack.split('\n') : [],
      path: erro.path,
    })
  })
);

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => console.log(`App iniciado na porta ${PORTA}`));