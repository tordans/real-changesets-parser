import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../parsers/realChangesetElementParser'
import { wayDeleteInput } from '../data/way-delete-input'
import { wayDeleteOutput } from '../data/way-delete-output'

test('handle way delete case', () => {
  const actualOutput = realChangesetElementParser(wayDeleteInput)
  expect(actualOutput).toEqual(wayDeleteOutput)
})
