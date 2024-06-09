import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { wayModifyInput } from '../data/way-modify-input'
import { wayModifyOutput } from '../data/way-modify-output'

test('handle way modify case', () => {
  const actualOutput = realChangesetElementParser(wayModifyInput)
  expect(actualOutput).toEqual(wayModifyOutput)
})
