import { EmployeeResolver } from "./resolvers/Employee";
import { __prod__ } from "./constants";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Employee } from "./entities/Employee";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

const main = async () => {
  const app = express();

  await createConnection({
    type: "postgres",
    database: "empdir",
    username: "postgres",
    password: "postgres",
    logging: !__prod__,
    synchronize: !__prod__,
    entities: [Employee],
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [EmployeeResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(9999, () => {
    console.log("server started on port localhost:9999");
  });
};

main().catch((err) => {
  console.log(err);
});
