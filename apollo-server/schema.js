// The GraphQL schema
export const typeDefs = `#graphql

  type Query {
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]
    category(id: ID!): Category
    reviews: [Review!]!
    review(id: ID!): Review
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: String!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String
    products(filter: ProductsFilterInput): [Product]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

`;