import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../parsers/realChangesetElementParser.js'
import { relationInRelationInput } from '../data-elements/relation-in-relation-input.js'
import { relationInRelationOutput } from '../data-elements/relation-in-relation-output.js'

test('handle relation in relation case', () => {
  const actualOutput = realChangesetElementParser(relationInRelationInput)
  expect(actualOutput).toEqual(relationInRelationOutput)
})
