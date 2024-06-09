import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { wayDeleteInput } from '../data-elements/way-delete-input'
import { wayDeleteOutput } from '../data-elements/way-delete-output'

test('handle way delete case', () => {
  const actualOutput = realChangesetElementParser(wayDeleteInput)
  expect(actualOutput).toEqual(wayDeleteOutput)
})
