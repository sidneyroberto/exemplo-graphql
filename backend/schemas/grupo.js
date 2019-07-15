const {
    composeWithMongoose
} = require('graphql-compose-mongoose');
const Grupo = require('../models/grupo');

const GrupoTC = composeWithMongoose(Grupo, {});

const camposGrupo = {
    queries: {
        'grupo.todos': GrupoTC.getResolver('findMany'),
        'grupo.porId': GrupoTC.getResolver('findById'),
        'grupo.porContato': {
            type: '[Grupo]',
            args: {
                idContato: 'String!'
            },
            resolve: (_, {
                    idContato
                }) =>
                Grupo
                .find({
                    'contatos._id': idContato
                })
                .then(grupos => grupos)
                .catch(erro => {
                    console.log(erro);
                    throw erro;
                })
        }
    },
    mutations: {
        'grupo.salvar': GrupoTC.getResolver('createOne'),
        'grupo.atualizar': GrupoTC.getResolver('updateById'),
        'grupo.remover': GrupoTC.getResolver('removeById')
    }
};

module.exports = camposGrupo;