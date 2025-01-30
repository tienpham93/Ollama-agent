import { ModelConfig } from "../types";


export const availableModels = ['llama3.2', 'llama3.1', 'deepseek-r1'] as const;
export type AvailableModel = typeof availableModels[number];

export const defautModelConfig: ModelConfig = {
    name: 'llama3.1',
    parameters: {
        temperature: 0.7,
        top_p: 0.9,
        num_predict: 100
    }
};

export function isValidModel(model: string): model is AvailableModel {
    return availableModels.includes(model as AvailableModel);
}