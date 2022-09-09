import {
  getArtists,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
} from "../services/artists.service";

export default {
  Query: {
    artists: async () => {
      return await getArtists();
    },
    artist: async (_: any, args: { id: any; }) => {
      return await getArtist(args.id);
    },
  },
  Mutation: {
    createArtist() {},
    deleteArtist() {},
    updateArtist() {},
  },
  Artist: {
    bands() {},
  },
};
