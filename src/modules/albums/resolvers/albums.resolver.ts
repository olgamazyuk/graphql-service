import {
  getAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
} from "../services/albums.service";

export default {
  Query: {
    albums: async () => {
      return await getAlbums();
    },
    album: async (_: any, args: { id: string; }) => {
      return await getAlbum(args.id);
    },
  },
  Mutation: {
    createAlbum: () => {},
    deleteAlbum: () => {},
    updateAlbum: () => {},
  },
  Album: {
    artists: () => {},
    bands: () => {},
    tracks: () => {},
    genres: () => {},
  },
};
