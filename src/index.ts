import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import resolvers from "./modules/resolvers";
import typeDefs from "./modules/typeDefs";

const PORT = process.env.PORT;

async function startApolloServer(typeDefs: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
}

startApolloServer(typeDefs, resolvers);
