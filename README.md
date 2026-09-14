# Midnight demo fixture

Public GOV-019 host-enforcement fixture. This repository is a **consumer** of the Midnight CLI, not the kernel.

Required status check: `midnight-governance`.

E2E probe: this PR exists to prove a red `midnight-governance` check blocks merge into `main`, and a green check allows merge.

## Local

```bash
npm test
npm run lint
npm run compile:check
```
