const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Staff {
    _id: ID
    staffName: String
    email: String
    password: String
  }

  type Query {
    allStaff: [Staff]
    staff(staffName: String!): Staff
  }

  type Mutation {
    addStaff(staffName: String!, email: String!, password: String!): Staff
  }
`;

module.exports = typeDefs;