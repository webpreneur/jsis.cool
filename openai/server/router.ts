import { FastifyInstance } from "fastify";
import { completionController, indexController, modelController } from "./controllers";


export default async function router(fastify: FastifyInstance) {
  fastify.register(modelController, { prefix: "/api/v1/model" });
  fastify.register(completionController, { prefix: "/api/v1/completion" });
  fastify.register(indexController, { prefix: "/" });
}