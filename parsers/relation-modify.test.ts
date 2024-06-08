import { expect, test } from 'vitest'
import { relationModifyInput } from '../tests/data/relation-modify-input'
import { relationModifyOutput } from '../tests/data/relation-modify-output'
import { realChangesetElementParser } from './realChangesetElementParser'

test('handle relation modify case', () => {
  const actualOutput = realChangesetElementParser(relationModifyInput)
  expect(actualOutput).toEqual(relationModifyOutput)
})
