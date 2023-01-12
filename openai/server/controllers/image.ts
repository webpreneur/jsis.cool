import { FastifyInstance } from "fastify";
import { CreateImageRequest, ImagesResponse } from "openai";

import { createImage } from "../openai/images";

export const imageController = async (fastify: FastifyInstance) => {

    fastify.post<{
        Body: CreateImageRequest,
        Reply: ImagesResponse,
      }>('/', async (request, reply) => {

        const image = await createImage(request.body);
        reply.status(200).send(image);

    });

}