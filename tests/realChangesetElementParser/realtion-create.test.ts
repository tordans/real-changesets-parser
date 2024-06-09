import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { relationCreateInput } from '../data/realtion-create-input'
import { relationCreateOutput } from '../data/realtion-create-output'

test('handle relation create case', () => {
  const actualOutput = realChangesetElementParser(relationCreateInput)
  expect(actualOutput).toEqual(relationCreateOutput)
})
