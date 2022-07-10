import { gql } from "apollo-server-express";

export default gql`
  type Favourite {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }
  type Query {
    favourites: Favourite
  }
  type Mutation {
    addTrackToFavourites: Favourite
    addBandToFavourites: Favourite
    addArtistToFavourites: Favourite
    addGenreToFavourites: Favourite
  }
`;
