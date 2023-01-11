import { FastifyInstance } from "fastify";

export const indexController = async (fastify: FastifyInstance) => {
    fastify.get("/", async (request, reply) => reply.code(200).send('Hello from Fastify!'));
}