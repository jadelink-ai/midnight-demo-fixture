# Requirements

Each Requirement belongs to exactly one root `iterations/<iteration-id>/ITERATION.yaml`. Requirements are independent functional nodes; their `02-PLAN/TASK.md` is the only task decomposition authority.

Each governed requirement gets its own directory. `REQUIREMENT.yaml` is the machine-readable authority; JSON is valid YAML 1.2 for the bootstrap profile.

```text
requirements/<requirement-id>/
├── REQUIREMENT.yaml
├── 00-MATERIALS/     # source materials and immutable references
├── 01-ANALYSIS/      # ambiguity, impact, and risk analysis
├── 02-PLAN/          # SDD, TDD, ADRs, and executable TASKs
├── 03-RUN/           # append-only execution and test records
├── 04-EVIDENCE/      # retained machine evidence and evidence index
└── 05-ACCEPTANCE/    # E2E and human acceptance records
```
