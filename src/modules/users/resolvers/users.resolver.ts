import { getJwt, getUser, register } from "../services/users.service";

export default {
  Query: {
    jwt: async (_: any, { email, password }: any) => {
      return await getJwt(email, password);
    },
    user: async (_: any, args: { id: string }) => {
      return await getUser(args.id);
    },
  },
  Mutation: {
    register() {},
  },
};
