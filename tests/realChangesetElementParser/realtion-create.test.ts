import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { relationCreateInput } from '../data-elements/realtion-create-input'
import { relationCreateOutput } from '../data-elements/realtion-create-output'

test('handle relation create case', () => {
  const actualOutput = realChangesetElementParser(relationCreateInput)
  expect(actualOutput).toEqual(relationCreateOutput)
})
