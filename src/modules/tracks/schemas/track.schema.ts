import { gql } from "apollo-server-express";

export default gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
  type Query {
    track(id: ID!): Track
    tracks: [Track]
  }
  type Mutation {
    createTrack: Track
    deleteTrack: Track
    updateTrack: Track
  }
`;
