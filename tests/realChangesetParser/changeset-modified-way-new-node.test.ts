import { expect, test } from 'vitest'
import { realChangesetParser } from '../../index.js'
import { input } from '../data-changesets/changeset-modified-way-new-node-input.js'
import { output } from '../data-changesets/changeset-modified-way-new-node-output.js'

test('handle changeset with new node that modified the way', () => {
  const actualOutput = realChangesetParser(input)
  expect(actualOutput).toEqual(output)
})
