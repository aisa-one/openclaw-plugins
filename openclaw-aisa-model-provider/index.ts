import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { createProviderApiKeyAuthMethod } from "openclaw/plugin-sdk/provider-auth-api-key";
import {
  AISA_DOCS_URL,
  AISA_MARKETPLACE_URL,
  AISA_DEFAULT_MODEL_REF,
  PROVIDER_ID,
  PROVIDER_LABEL,
} from "./src/constants.js";
import { applyAisaConfig } from "./src/onboard.js";
import { buildAisaProvider } from "./src/provider-catalog.js";

export default definePluginEntry({
  id: PROVIDER_ID,
  name: "AIsa Provider",
  description: "Native OpenClaw provider plugin for the AIsa unified Chinese model gateway",
  register(api) {
    api.registerProvider({
      id: PROVIDER_ID,
      label: PROVIDER_LABEL,
      docsPath: AISA_DOCS_URL,
      envVars: ["AISA_API_KEY"],
      auth: [
        createProviderApiKeyAuthMethod({
          providerId: PROVIDER_ID,
          methodId: "api-key",
          label: "AIsa API key",
          hint: "China's top AI models through one API key",
          optionKey: "aisaApiKey",
          flagName: "--aisa-api-key",
          envVar: "AISA_API_KEY",
          promptMessage: `Enter AIsa API key\n${AISA_MARKETPLACE_URL}`,
          profileId: "aisa:default",
          allowProfile: false,
          defaultModel: AISA_DEFAULT_MODEL_REF,
          expectedProviders: [PROVIDER_ID],
          applyConfig: (cfg) => applyAisaConfig(cfg),
          wizard: {
            choiceId: "aisa-api-key",
            choiceLabel: "AIsa API key",
            choiceHint: "Qwen, Kimi, GLM, DeepSeek, MiniMax",
            groupId: "aisa",
            groupLabel: "AIsa",
            groupHint: "Unified Chinese model gateway",
          },
        }),
      ],
      catalog: {
        order: "simple",
        run: async (ctx) => {
          const apiKey = ctx.resolveProviderApiKey(PROVIDER_ID).apiKey;
          if (!apiKey) {
            return null;
          }
          return {
            provider: {
              ...buildAisaProvider(),
              apiKey,
            },
          };
        },
      },
      isModernModelRef: () => true,
    });
  },
});
