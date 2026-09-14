# Midnight demo fixture

Public consumer of the Midnight CLI, not the kernel.

- GOV-019: host-enforced required check `midnight-governance`
- GOV-021: independent golden-path E2E subject (freeze → G2 → candidate → verify → GitHub Release observation)

Kernel `npm test` is **not** this repository's golden-path E2E.

## Local

```bash
npm test
npm run lint
npm run compile:check
```

Golden path: see `docs/golden-path.md` after publish, or the kernel doc `docs/fixtures/golden-path.md`.
