import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }
  type JWT {
    jwt: String!
  }
  input Login {
    email: String!
    password: String!
  }
  type Query {
    jwt(login: Login): JWT
    user(id: ID!): User
  }
  type Mutation {
    register: User
  }
`;
