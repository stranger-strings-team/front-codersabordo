import { assert, expect, test } from 'vitest'

test('1+1', () => {
  expect(1+1).toBe(2)
})

test('JSON', () => {
  const input = {
    "hola": 'q tal',
    "nose": 'no muy bien',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"hola":"q tal","nose":"no muy bien"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})
