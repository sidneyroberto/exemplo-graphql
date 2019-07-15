const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    contatos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contato'
    }]
});

module.exports = mongoose.model('Grupo', esquema);