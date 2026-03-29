# AIsa Provider Plugin for OpenClaw

This package converts the AIsa provider pull request into a **native OpenClaw code plugin** that can be published to **ClawHub** as a **Code Plugin**.

## What this plugin does

The plugin registers a provider named `aisa` and exposes a unified OpenAI-compatible gateway for major Chinese models through:

- `AISA_API_KEY`
- `https://api.aisa.one/v1`
- default model `aisa/kimi-k2.5`

The bundled catalog currently includes:

| Model Ref | Name | Input | Reasoning | Context |
| --- | --- | --- | --- | --- |
| `aisa/minimax-m2.1` | MiniMax M2.1 | text | No | 200k |
| `aisa/kimi-k2.5` | Kimi K2.5 | text | Yes | 256k |
| `aisa/qwen3-max` | Qwen3 Max | text, image | Yes | 256k |
| `aisa/glm-5` | GLM-5 | text, image | Yes | 200k |
| `aisa/deepseek-v3.2` | DeepSeek V3.2 | text | Yes | 128k |
| `aisa/seed-1-8-251228` | Seed 1.8 | text | Yes | 128k |

## Directory layout

```text
openclaw-aisa-provider/
├── package.json
├── openclaw.plugin.json
├── index.ts
├── README.md
└── src/
    ├── constants.ts
    ├── onboard.ts
    └── provider-catalog.ts
```

## Local installation

```bash
openclaw plugins install ./openclaw-aisa-provider
openclaw gateway restart
```

Then configure credentials either by environment variable:

```bash
export AISA_API_KEY="your-key"
```

or through onboarding:

```bash
openclaw onboard --auth-choice aisa-api-key
```

## Publish to ClawHub

On ClawHub, upload this folder as a **Code Plugin**. The platform will inspect the package, detect `openclaw.plugin.json`, and prefill package metadata.

## Notes

This package intentionally extracts the provider behavior from the PR into plugin space. It does **not** yet include the follow-up reliability fixes mentioned in the PR, such as JSON fence stripping, stricter structured-output prompting, or automatic retry logic. Those should be added either as provider runtime wrappers or as separate companion plugins.
