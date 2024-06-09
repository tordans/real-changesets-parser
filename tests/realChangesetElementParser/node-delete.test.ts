import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { nodeDeleteInput } from '../data/node-delete-input'
import { nodeDeleteOutput } from '../data/node-delete-output'

test('handle node delete case', () => {
  const actualOutput = realChangesetElementParser(nodeDeleteInput)
  expect(actualOutput).toEqual(nodeDeleteOutput)
})
