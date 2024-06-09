import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../parsers/realChangesetElementParser'
import { nodeModifyInput } from '../data-elements/node-modify-input'
import { nodeModifyOutput } from '../data-elements/node-modify-output'

test('handle node modify case', () => {
  const actualOutput = realChangesetElementParser(nodeModifyInput)
  expect(actualOutput).toEqual(nodeModifyOutput)
})
