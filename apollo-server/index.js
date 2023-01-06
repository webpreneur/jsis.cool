import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { products } from './db/db.js';

// The GraphQL schema
const typeDefs = `#graphql

  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
  }

`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    products: () => {
        return products;
    },
    product: (parent, args, content) => {
        console.log(args);
        return products.find(({id}) => id === args.id);
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);