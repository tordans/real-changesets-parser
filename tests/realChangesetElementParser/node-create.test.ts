import { expect, test } from 'vitest'
import { realChangesetElementParser } from '../../index.js'
import { nodeCreateInput } from '../data-elements/node-create-input'
import { nodeCreateOutput } from '../data-elements/node-create-output'

test('handle node create case', () => {
  const actualOutput = realChangesetElementParser(nodeCreateInput)
  expect(actualOutput).toEqual(nodeCreateOutput)
})
