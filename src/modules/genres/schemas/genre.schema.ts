import { gql } from "apollo-server-express";

export default gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }
  type Query {
    genre(id: ID!): Genre
    genres: [Genre]
  }
  type Mutation {
    createGenre: Genre
    deleteGenre: Genre
    updateGenre: Genre
  }
`;
