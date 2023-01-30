import { FastifyInstance } from "fastify";

import { 
  indexController, 
} from "./controllers";


export default async function router(fastify: FastifyInstance) {
  fastify.register(indexController, { prefix: "/" });
}