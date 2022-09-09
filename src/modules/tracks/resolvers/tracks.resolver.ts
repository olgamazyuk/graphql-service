import {
  getTracks,
  getTrack,
  createTrack,
  deleteTrack,
  updateTrack,
} from "../services/tracks.service";

export default {
  Query: {
    tracks: async () => {
      return await getTracks();
    },
    track: async (_: any, args: { id: string }) => {
      return await getTrack(args.id);
    },
  },
  Mutation: {
    createTrack() {},
    deleteTrack() {},
    updateTrack() {},
  },
  Track: {
    artists() {},
    bands() {},
    genres() {},
  },
};
