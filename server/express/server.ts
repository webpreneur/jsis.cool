// @deno-types="npm:@types/express@4.17.0"
import express from "npm:express@4.17.0";
/// <reference types="npm:@types/node" />
// @deno-types="npm:@types/bcrypt@5.0.0"
import bcrypt from "npm:bcrypt@5.1.0";
// @deno-types="npm:@types/cors@2.8.13";
import cors from "npm:cors@2.8.5";

import knex, { Knex } from "npm:knex@2.3.0";


const config: Knex.Config = {
  client: 'pg',
  connection: Deno.env.get("POSTGRES_URI") as string,
}

interface User {

}

const db = knex(config);

try {
  const users = await knex<User>('users').select('id', 'age');
} catch (err) {
  // error handling
}

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", function (f, res) {
  res.send("Hello World");
});
/* 
app.get("/api", function (req, res) {
  res.send("Hello from the API");
});

app.get("/api/user", function (req, res) {
  res.send({name: "John"});
}); */

app.listen(3000);

console.log("listening on http://localhost:3000/");

