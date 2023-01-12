// https://beta.openai.com/docs/api-reference/images

import { CreateImageRequest, ImagesResponse } from "openai";

import { openai } from "./api";

export const createImage = async (request: CreateImageRequest): Promise<ImagesResponse | undefined> => {
    try {
        const { data: image } = await openai.createImage(request);
        return image;
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }   
    }
}
