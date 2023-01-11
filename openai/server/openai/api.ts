import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config({ path: './openai/.env'});

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
