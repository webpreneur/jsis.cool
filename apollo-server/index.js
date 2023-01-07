import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';
import { Category, Product, Query } from './resolvers/index.js';
import { categories, products, reviews } from './db/db.js';


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Category,
    Product,
    Query,
  },
});

const { url } = await startStandaloneServer(
  server,
  {
    context: async () => ({
      categories,
      products,
      reviews,
    }),
    listen: { port: 4000 }
  }
);
console.log(`🚀 Server ready at ${url}`);