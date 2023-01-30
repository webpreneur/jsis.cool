/* import { FastifyInstance } from "fastify";
import { CreateCompletionRequest, CreateCompletionResponse } from "openai";
import { createCompletion } from "../openai";

export const completionController = async (fastify: FastifyInstance) => {
    
    fastify.post<{
        Body: CreateCompletionRequest,
        Reply: CreateCompletionResponse
      }>('/', async (request, reply) => {

        const completion = await createCompletion(request.body);
        console.log(completion);
        reply.status(200).send(completion);

      });
} */