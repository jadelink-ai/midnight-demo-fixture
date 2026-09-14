# Project Constitution

This file is project-specific and should describe architecture, build/test, migration, API contract, deployment, and runtime configuration conventions discovered during initialization.

## Defaults

- Use the repository's existing package manager and build system.
- Run existing lint and tests before declaring implementation complete.
- Do not modify generated governance files directly.
- Model planning as `Iteration → Requirement → Task`: an Iteration is the root, Requirements are independent functional nodes, and each Requirement owns its tasks in `02-PLAN/TASK.md`.
- Declare the requester development literacy and selected acceptance method for work that uses `CODE` or `E2E` acceptance. Non-technical requesters must use E2E. In a single-person project, E2E is completed by a passing report from an identified human executor and needs neither G3 nor G4; CODE needs G3 verification and G4 acceptance.
