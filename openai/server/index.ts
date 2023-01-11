import fastify from 'fastify'
import { CreateCompletionRequest } from 'openai';
import { createCompletion } from './openai';

const server = fastify();

server.get('/', async (request, reply) => {
  return 'Hi!';
});

server.post<{
  Body: CreateCompletionRequest,
  Reply: any
}>('/create-completion', async (request, reply) => {
  const x = await createCompletion(request.body);
  console.log(x);
  reply.status(200).send(x);
});

server.get<{Querystring: { prompt: string }}>('/q', async (request, reply) => {
  const { prompt } = request.query;
  return prompt;
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});
