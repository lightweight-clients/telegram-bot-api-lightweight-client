import { test, expect } from 'vitest';
import { sample } from '../src/index.js';

test('sample test', async () => {
  const result = sample();
  expect(result).toBe('Output');
});
