import {
  getBands,
  getBand,
  createBand,
  deleteBand,
  updateBand,
} from "../services/bands.service";

export default {
  Query: {
    bands: async () => {
      return await getBands();
    },
    band: async (_: any, args: { id: string }) => {
      return await getBand(args.id);
    },
  },
  Mutation: {
    createBand() {},
    deleteBand() {},
    updateBand() {},
  },
  Band: {
    members() {},
    genres() {},
  },
};
