import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../parsers/realChangesetElementParser'
import { nodeModifyInput } from '../data/node-modify-input'
import { nodeModifyOutput } from '../data/node-modify-output'

test('handle node modify case', () => {
  const actualOutput = realChangesetElementParser(nodeModifyInput)
  expect(actualOutput).toEqual(nodeModifyOutput)
})
