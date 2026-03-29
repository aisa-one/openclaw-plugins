export const PROVIDER_ID = "aisa";
export const PROVIDER_LABEL = "AIsa";
export const AISA_BASE_URL = "https://api.aisa.one/v1";
export const AISA_DEFAULT_MODEL_ID = "kimi-k2.5";
export const AISA_DEFAULT_MODEL_REF = `${PROVIDER_ID}/${AISA_DEFAULT_MODEL_ID}`;
export const AISA_MARKETPLACE_URL = "https://marketplace.aisa.one/";
export const AISA_DOCS_URL = "https://aisa.mintlify.app/api-reference/introduction";
export const AISA_DEFAULT_MAX_TOKENS = 32768;

export const AISA_MODELS = [
  {
    id: "minimax-m2.1",
    name: "MiniMax M2.1",
    reasoning: false,
    input: ["text"] as const,
    cost: { input: 0.21, output: 0.84, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: AISA_DEFAULT_MAX_TOKENS,
  },
  {
    id: "kimi-k2.5",
    name: "Kimi K2.5",
    reasoning: true,
    input: ["text"] as const,
    cost: { input: 0.4018, output: 2.1077, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 256000,
    maxTokens: AISA_DEFAULT_MAX_TOKENS,
  },
  {
    id: "qwen3-max",
    name: "Qwen3 Max",
    reasoning: true,
    input: ["text", "image"] as const,
    cost: { input: 0.72, output: 3.6, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 256000,
    maxTokens: AISA_DEFAULT_MAX_TOKENS,
  },
  {
    id: "glm-5",
    name: "GLM-5",
    reasoning: true,
    input: ["text", "image"] as const,
    cost: { input: 1.0, output: 3.2, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: AISA_DEFAULT_MAX_TOKENS,
  },
  {
    id: "deepseek-v3.2",
    name: "DeepSeek V3.2",
    reasoning: true,
    input: ["text"] as const,
    cost: { input: 0.28, output: 0.42, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: AISA_DEFAULT_MAX_TOKENS,
  },
  {
    id: "seed-1-8-251228",
    name: "Seed 1.8",
    reasoning: true,
    input: ["text"] as const,
    cost: { input: 0.225, output: 1.8, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: AISA_DEFAULT_MAX_TOKENS,
  },
] as const;

export type AisaModelId = (typeof AISA_MODELS)[number]["id"];
