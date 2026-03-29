import {
  applyAgentDefaultModelPrimary,
  type OpenClawConfig,
} from "openclaw/plugin-sdk/provider-onboard";
import { AISA_DEFAULT_MODEL_REF } from "./constants.js";

export { AISA_DEFAULT_MODEL_REF } from "./constants.js";

export function applyAisaProviderConfig(cfg: OpenClawConfig): OpenClawConfig {
  const models = { ...cfg.agents?.defaults?.models };
  models[AISA_DEFAULT_MODEL_REF] = {
    ...models[AISA_DEFAULT_MODEL_REF],
    alias: models[AISA_DEFAULT_MODEL_REF]?.alias ?? "AIsa",
  };

  return {
    ...cfg,
    agents: {
      ...cfg.agents,
      defaults: {
        ...cfg.agents?.defaults,
        models,
      },
    },
  };
}

export function applyAisaConfig(cfg: OpenClawConfig): OpenClawConfig {
  return applyAgentDefaultModelPrimary(applyAisaProviderConfig(cfg), AISA_DEFAULT_MODEL_REF);
}
