import { AISA_BASE_URL, AISA_MODELS } from "./constants.js";

export function buildAisaProvider(): ModelProviderConfig {
  return {
    baseUrl: AISA_BASE_URL,
    api: "openai-completions",
    models: AISA_MODELS.map((model) => ({
      id: model.id,
      name: model.name,
      reasoning: model.reasoning,
      input: [...model.input],
      cost: { ...model.cost },
      contextWindow: model.contextWindow,
      maxTokens: model.maxTokens,
    })),
  };
}
