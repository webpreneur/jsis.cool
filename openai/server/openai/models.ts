import { ListModelsResponse, Model } from "openai";

import { openai } from "./api"

export const listModels = async (): Promise<ListModelsResponse | undefined> => {
    try {
        const { data: models } = await openai.listModels();
        return models;
    } catch (err) {
        console.error(err);
    }

}
export const retrieveModel = async (id: string): Promise<Model | undefined> => {
    try {
        const { data: model } = await openai.retrieveModel(id);
        return model;
    } catch (err) {
        console.error(err);
    }
}
