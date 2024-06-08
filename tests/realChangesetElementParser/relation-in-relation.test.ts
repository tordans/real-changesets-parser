import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../parsers/realChangesetElementParser.js'
import { relationInRelationInput } from '../data/relation-in-relation-input.js'
import { relationInRelationOutput } from '../data/relation-in-relation-output.js'

test('handle relation in relation case', () => {
  const actualOutput = realChangesetElementParser(relationInRelationInput)
  expect(actualOutput).toEqual(relationInRelationOutput)
})
