import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { relationModifyInput } from '../data-elements/relation-modify-input'
import { relationModifyOutput } from '../data-elements/relation-modify-output'

test('handle relation modify case', () => {
  const actualOutput = realChangesetElementParser(relationModifyInput)
  expect(actualOutput).toEqual(relationModifyOutput)
})
