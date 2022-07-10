import { gql } from "apollo-server-express";

export default gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }
  type Member {
    artist: Artist
    instrument: String
    years: [String]
  }
  type Query {
    bands: [Band]
    band(id: ID!): Band
  }
  type Mutation {
    createBand: Band
    deleteBand: Band
    updateBand: Band
  }
`;
