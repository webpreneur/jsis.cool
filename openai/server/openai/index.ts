import { Configuration, CreateCompletionRequest, CreateCompletionResponse, OpenAIApi } from 'openai';
import dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config({ path: './openai/.env'});

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const createCompletion = async (request: CreateCompletionRequest): Promise<CreateCompletionResponse | undefined> => {
    if ( !request.max_tokens ) {
        request.max_tokens = 2048;
    }
    if ( request.echo === undefined ) {
        request.echo = false;
    }
    try {
        const completion = await openai.createCompletion(
            request,
            // https://axios-http.com/docs/req_config
            {
                timeout: 5000,
                responseType: 'json'
            }
        );
        
        console.log('Completion:')
        console.log(completion);

        return completion.data;
    } catch (error: any) {
        
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }   
    }
}
