import { __prod__ } from "./constants";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Employee } from "./entities/Employee";
import express from "express";

const main = async () => {
  const conn = createConnection({
    type: "postgres",
    database: "empdir",
    username: "postgres",
    password: "postgres",
    logging: !__prod__,
    synchronize: !__prod__,
    entities: [Employee],
  });

  const app = express();

  app.get("/", (_, res) => {
    res.send("hello world");
  });

  app.listen(9999, () => {
    console.log("server started on port localhost:9999");
  });
};

main().catch((err) => {
  console.log(err);
});
