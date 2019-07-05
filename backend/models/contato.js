const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    dataNascimento: Date
});

module.exports = mongoose.model('Contato', esquema);