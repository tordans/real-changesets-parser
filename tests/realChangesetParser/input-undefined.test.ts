import { featureCollection } from '@turf/helpers'
import { expect, test } from 'vitest'
import { realChangesetParser } from '../../index.js'

test('Test full changeset with all data entries', () => {
  const actualOutput = realChangesetParser(undefined)
  expect(actualOutput).toEqual(featureCollection([]))
})
