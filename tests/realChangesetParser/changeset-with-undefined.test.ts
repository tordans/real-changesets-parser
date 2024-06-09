import { expect, test } from 'vitest'
import { realChangesetParser } from '../../index.js'
import { changesetWithUndefinedInput } from '../data-changesets/changeset-with-undefined-input.js'
import { changesetWithUndefinedOutput } from '../data-changesets/changeset-with-undefined-output.js'

test('handle changeset where the output would include "undefined" if we did not filter those', () => {
  const actualOutput = realChangesetParser(changesetWithUndefinedInput)
  expect(actualOutput).toEqual(changesetWithUndefinedOutput)
})
