import { CreateCompletionRequest, CreateCompletionResponse } from "openai";
import { openai } from "./api";

export const createCompletion = async (request: CreateCompletionRequest): Promise<CreateCompletionResponse | undefined> => {
    if ( !request.max_tokens ) {
        request.max_tokens = 4000;
    }
    if ( request.echo === undefined ) {
        request.echo = false;
    }
    try {
        const completion = await openai.createCompletion(
            request,
            // https://axios-http.com/docs/req_config
            {
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
