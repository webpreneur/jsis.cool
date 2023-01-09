import { load } from "https://deno.land/std@0.171.0/dotenv/mod.ts";

// @deno-types="npm:@types/express@4.17.0"
import express from "npm:express@4.17.0";
/// <reference types="npm:@types/node" />
// @deno-types="npm:@types/bcrypt@5.0.0"
import bcrypt from "npm:bcrypt@5.1.0";
// @deno-types="npm:@types/cors@2.8.13";
import cors from "npm:cors@2.8.5";
// @deno-types="npm:@types/pg@8.6.6";
import pg from "npm:pg@8.8.0";

// @deno-types="npm:@types/morgan@1.9.4";
import morgan from "npm:morgan@1.10.0";

import * as knex from "npm:knex@2.3.0";

const {
  POSTGRES_DATABASE: database,
  POSTGRES_HOST: host,
  POSTGRES_PASSWORD: password,
  POSTGRES_PORT,
  POSTGRES_USER: user,
} = await load();


const config: knex.Knex.Config = {
  client: 'pg',
  connection: {
    database,
    host,
    password,
    port: Number(POSTGRES_PORT),
    user,
  }
}

interface User {
  email: string;
  posts: number;
}

const db = knex.default.knex(config);

try {
  const users = await db<User>('users').select('email', 'posts');
  console.log(users);
} catch (err) {
  // error handling
  console.error(err);
}

const app = express();

const whitelist = ['http://localhost:4200'];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin as string)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

const corsHandler = cors(corsOptions) as (options: cors.CorsOptions) => express.RequestHandler;

// app.use(morgan('combined'))
// app.use(corsHandler);
// app.use(express.json());


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
const port = 3000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}/`);
});
