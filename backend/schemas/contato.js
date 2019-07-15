const {
    composeWithMongoose
} = require('graphql-compose-mongoose');
const Contato = require('../models/contato');

const ContatoTC = composeWithMongoose(Contato, {});

const camposContato = {
    queries: {
        'contato.todos': ContatoTC.getResolver('findMany'),
        'contato.porId': ContatoTC.getResolver('findById'),
        'contato.quantidade': ContatoTC.getResolver('count'),
        'contato.porNome': {
            type: '[Contato]',
            args: {
                nome: 'String!'
            },
            resolve: (_, {
                    nome
                }) =>
                Contato
                .find({
                    nome: {
                        '$regex': nome,
                        '$options': '-i'
                    }
                })
                .then(contatos => contatos)
                .catch(erro => {
                    console.log(erro);
                    throw erro;
                })
        }
    },
    mutations: {
        'contato.salvar': ContatoTC.getResolver('createOne'),
        'contato.atualizar': ContatoTC.getResolver('updateById'),
        'contato.remover': ContatoTC.getResolver('removeById')
    }
};

module.exports = camposContato;