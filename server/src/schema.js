// src/schema.js
import {
    makeExecutableSchema,
    addMockFunctionsToSchema, // we'll use this later
  } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
  type Channel {
     id: ID!                # "!" denotes a required field
     name: String
  }
  # This type specifies the entry points into our API. In this case
  # there is only one - "channels" - which returns a list of channels.
  type Query {
     channels: [Channel]    # "[]" means this is a list of channels
  }
  `;
// const schema = makeExecutableSchema({ typeDefs });
const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });
export { schema };