import { FastifyInstance } from "fastify";
import { listModels, retrieveModel } from "../openai";
  
export const modelController = async (fastify: FastifyInstance) => {
  // GET /api/v1/model

  fastify.get('/', async (request, reply) => {
    const models = await listModels();
    console.log(models);
    reply.status(200).send(models);
  });

  fastify.get<{Params: { id: string }}>('/:id', async (request, reply) => {
    const { id } = request.params;
    const model = await retrieveModel(id);
    reply.status(200).send(model);
  });

}
