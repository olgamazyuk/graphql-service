import { gql } from "apollo-server-express";

export default gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
  input CreateAlbumInput {
    id: String
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }
  input UpdateAlbumInput {
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }
  type Delete {
    id: ID
    deletedCount: Int
  }
  type Query {
    albums: [Album]
    album(id: ID!): Album
  }
  type Mutation {
    createAlbum(album: CreateAlbumInput): Album
    deleteAlbum(id: ID!): Delete
    updateAlbum(id: ID!, album: UpdateAlbumInput): Album
  }
`;
