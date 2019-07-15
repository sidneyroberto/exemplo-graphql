const {
    schemaComposer
} = require('graphql-compose');

const camposContato = require('./schemas/contato');
const camposGrupo = require('./schemas/grupo');

// Queries
schemaComposer.Query.addNestedFields({
    ...camposContato.queries,
    ...camposGrupo.queries
});

// Mutations
schemaComposer.Mutation.addNestedFields({
    ...camposContato.mutations,
    ...camposGrupo.mutations
});

module.exports = schemaComposer.buildSchema();