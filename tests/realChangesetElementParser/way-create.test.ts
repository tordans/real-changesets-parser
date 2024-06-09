import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { wayCreateInput } from '../data/way-create-input'
import { wayCreateOutput } from '../data/way-create-output'

test('handle way create case', () => {
  const actualOutput = realChangesetElementParser(wayCreateInput)
  expect(actualOutput).toEqual(wayCreateOutput)
})
