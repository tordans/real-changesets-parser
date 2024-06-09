import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { wayCreateInput } from '../data-elements/way-create-input.js'
import { wayCreateOutput } from '../data-elements/way-create-output.js'

test('handle way create case', () => {
  const actualOutput = realChangesetElementParser(wayCreateInput)
  expect(actualOutput).toEqual(wayCreateOutput)
})
