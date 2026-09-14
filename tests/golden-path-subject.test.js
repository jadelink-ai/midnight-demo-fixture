import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('this fixture repo is the golden-path E2E subject, not the kernel', () => {
  const readme = readFileSync('README.md', 'utf8');
  assert.match(readme, /not the kernel/i);
  assert.match(readme, /golden-path E2E/);
  assert.match(readme, /freeze/);
});
