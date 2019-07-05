const { composeWithMongoose } = require('graphql-compose-mongoose');
const { schemaComposer } = require('graphql-compose');

const Contato = require('../models/contato');

const ContatoTC = composeWithMongoose(Contato, {});

schemaComposer.Query.addFields({
    contatos: ContatoTC.getResolver('findMany'),
    contatoPeloId: ContatoTC.getResolver('findById'),
    quantidadeContatos: ContatoTC.getResolver('count'),
    contatosPorNome: {
        type: '[Contato]',
        args: {nome: 'String!'},
        resolve: (_, { nome }) => 
            Contato
                .find({nome:  {'$regex': nome, '$options': '-i' }})
                .then(contatos => contatos)
                .catch(erro => {
                    console.log(erro);
                    throw erro;
                })
    }
});

schemaComposer.Mutation.addFields({
    salvar: ContatoTC.getResolver('createOne'),
    atualizar: ContatoTC.getResolver('updateById'),
    remover: ContatoTC.getResolver('removeById')
});

module.exports = schemaComposer.buildSchema();