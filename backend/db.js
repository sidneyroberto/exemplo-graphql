const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost/agenda-dev';

mongoose
    .connect(URI, {useNewUrlParser: true})
    .then(() => console.log('Mongoose conectado'))
    .catch(erro => console.log(erro));