import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import { Configuration, OpenAIApi } from 'openai';
import inquirer from 'inquirer';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

try {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Hello world",
  });
  console.log(completion.data.choices[0].text);
} catch (error: any) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}

const models = await openai.listModels();

const { prompt } = await inquirer.prompt({type: 'input', name: 'prompt', message: 'Ask...'});

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt,
});

console.log(completion.data.choices[0].text);