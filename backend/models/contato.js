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
    dataNascimento: Date,
    grupos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grupo'
    }]
});

module.exports = mongoose.model('Contato', esquema);