import { FastifyInstance } from "fastify";

import { 
  completionController, 
  indexController, 
  modelController, 
  imageController
} from "./controllers";


export default async function router(fastify: FastifyInstance) {
  fastify.register(indexController, { prefix: "/" });
  fastify.register(modelController, { prefix: "/api/v1/model" });
  fastify.register(completionController, { prefix: "/api/v1/completion" });
  fastify.register(imageController, { prefix: "/api/v1/image" });
}