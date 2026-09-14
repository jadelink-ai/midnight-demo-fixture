---
name: midnight
description: Govern AI-assisted engineering work using the project's canonical Midnight constitution, rules, workflows, and deterministic checks.
---

# Midnight Skill

Source digest: sha256:79a0f42b61516282c8e65dc03db92062ff485fc5c26fa29549f19a81ca13325a

## Operating contract

1. Load the active Requirement/Release context before changing governed code.
2. Use Midnight workflows for requirement, implementation, verification, and release work.
3. Never claim a MUST/MUST NOT rule passed without invoking the deterministic checker when one exists.
4. AI may execute work but may not approve G1/G2/G3/G4, waivers, emergency authorization, or risk acceptance.
5. Never modify a frozen ReleaseRevision or rewrite historical governance facts.
6. When a check blocks, report its stable MID-* rule ID and remediation instead of weakening policy.

## Deterministic commands

- midnight lint
- midnight freeze-requirement
- midnight candidate
- midnight merge-check
- midnight verify
- midnight emergency-record
- midnight compile --check

## Canonical sources

- .midnight/constitution/
- .midnight/rules/registry.yaml
- .midnight/policy/
- .midnight/workflows/
