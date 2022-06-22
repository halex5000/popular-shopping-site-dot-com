export const schema = gql`
  type Product {
    id: String!
    name: String!
    imageUrl: String!
    createdAt: DateTime!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: String!): Product @skipAuth
  }

  input CreateProductInput {
    name: String!
    imageUrl: String!
  }

  input UpdateProductInput {
    name: String
    imageUrl: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: String!, input: UpdateProductInput!): Product!
      @requireAuth
    deleteProduct(id: String!): Product! @requireAuth
  }
`
