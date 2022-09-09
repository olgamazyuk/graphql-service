import { gql } from "apollo-server-express";

export default gql`
  type Artist {
    id: ID!
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String!
    bands: [Band]
    instruments: [String]
  }
  type Query {
    artists: [Artist]
    artist(id: ID!): Artist
  }
  type Mutation {
    createArtist: Artist
    deleteArtist: Artist
    updateArtist: Artist
  }
`;
