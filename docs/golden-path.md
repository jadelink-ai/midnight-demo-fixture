# Fixture golden path

Governed E2E subject: this repository (`jadelink-ai/midnight-demo-fixture`), not the Midnight kernel.

Canonical procedure lives in the kernel doc `docs/fixtures/golden-path.md` until this tree is published. Local commands use `vendor/midnight-0.1.0` or a GitHub Release CLI:

```bash
npm test
npm run lint
npm run compile:check
```

Then freeze `FIX-GOLDEN-001`, record human G2 as `github:<login>`, `candidate --id FIX-GOLDEN-001`, `verify`. Observe Release assets with `observe-release --sums SHA256SUMS.txt`.
