import {
  getGenres,
  getGenre,
  createGenre,
  deleteGenre,
  updateGenre,
} from "../services/genres.service";

export default {
  Query: {
    genres: async () => {
      return await getGenres();
    },
    genre: async (_: any, args: { id: string }) => {
      return await getGenre(args.id);
    },
  },
  Mutation: {
    createGenre() {},
    deleteGenre() {},
    updateGenre() {},
  },
};
