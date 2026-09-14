# CI evidence landing zone

GitHub Actions artifact `midnight-governance-${run_id}` retains policy plus `.midnight/evidence/ci/<run_id>.json` for 90 days.

This fixture uses `repository_host_required_status_checks`. Missing host required checks fail `MID-CI-001`.
