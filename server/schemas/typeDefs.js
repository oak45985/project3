const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Staff {
    _id: ID
    staffName: String
    email: String
    password: String
  }

  type Product {
    _id: ID
    title: String
    description: String
    price: Int
    quantity: Int
    isClass: Boolean
    isCounted: Boolean
    isFree: Boolean
    variants: [Variant]
    productTags: [ProductTag]
  }

  type Variant {
    _id: ID
    variantTitle: String
    sku: String
  }

  type ProductTag {
    _id: ID
    productTag: String
  }

  type Query {
    allStaff: [Staff]
    staff(staffName: String!): Staff
    products: [Product]
    product(title: String!): Product
  }

  type Mutation {
    addStaff(staffName: String!, email: String!, password: String!): Staff
    addProduct(title: String!, description: String!, price: Int!, isClass: Boolean!, isCounted: Boolean!, isFree: Boolean!): Product
    addProductTag(productId: ID!, productTag: String!): Product
    addVariant(productId: ID!, variantTitle: String!, sku: String!): Product
  }
`;

module.exports = typeDefs;