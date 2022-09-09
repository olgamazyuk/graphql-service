import {
  getFavourites,
  addTrackToFavourites,
  addBandToFavourites,
  addArtistToFavourites,
  addGenreToFavourites,
} from "../services/favourites.service";

export default {
  Query: {
    favourites: async () => {
      return await getFavourites();
    },
  },
  Mutation: {
    addTrackToFavourites() {},
    addBandToFavourites() {},
    addArtistToFavourites() {},
    addGenreToFavourites() {},
  },
  Favourite: {
    artists() {},
    bands() {},
    tracks() {},
    genres() {},
  },
};
