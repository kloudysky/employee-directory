import { __prod__ } from "./constants";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Employee } from "./entities/Employee";

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
};

main();
