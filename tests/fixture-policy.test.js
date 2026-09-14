import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('demo fixture requires host status checks', () => {
  const project = JSON.parse(readFileSync('.midnight/policy/project.yaml', 'utf8'));
  const ci = JSON.parse(readFileSync('.midnight/policy/ci.yaml', 'utf8'));
  assert.equal(project.protected_change.enforcement, 'repository_host_required_status_checks');
  assert.equal(ci.protected_change.enforcement, 'repository_host_required_status_checks');
  assert.deepEqual(project.protected_change.required_status_checks, ['midnight-governance']);
});

test('GOV-019 red-check probe must fail until reverted', () => {
  assert.equal('intentional-fail', 'pass');
});
