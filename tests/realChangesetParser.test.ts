import { featureCollection } from '@turf/helpers'
import { expect, test } from 'vitest'
import { realChangesetParser } from '../parsers/realChangesetParser'
import { nodeCreateInput } from './data/node-create-input'
import { nodeCreateOutput } from './data/node-create-output'
import { nodeDeleteInput } from './data/node-delete-input'
import { nodeDeleteOutput } from './data/node-delete-output'
import { nodeModifyInput } from './data/node-modify-input'
import { nodeModifyOutput } from './data/node-modify-output'
import { relationCreateInput } from './data/realtion-create-input'
import { relationCreateOutput } from './data/realtion-create-output'
import { relationInRelationInput } from './data/relation-in-relation-input'
import { relationInRelationOutput } from './data/relation-in-relation-output'
import { relationModifyInput } from './data/relation-modify-input'
import { relationModifyOutput } from './data/relation-modify-output'
import { wayCreateInput } from './data/way-create-input'
import { wayCreateOutput } from './data/way-create-output'
import { wayDeleteInput } from './data/way-delete-input'
import { wayDeleteOutput } from './data/way-delete-output'
import { wayModifyInput } from './data/way-modify-input'
import { wayModifyOutput } from './data/way-modify-output'

const inputElements = [
  wayCreateInput,
  wayDeleteInput,
  wayModifyInput,
  nodeCreateInput,
  nodeDeleteInput,
  nodeModifyInput,
  relationInRelationInput,
  relationCreateInput,
  relationModifyInput,
]
const expectedOutput: ReturnType<typeof featureCollection> = featureCollection(
  [
    wayCreateOutput,
    wayDeleteOutput,
    wayModifyOutput,
    nodeCreateOutput,
    nodeDeleteOutput,
    nodeModifyOutput,
    relationInRelationOutput,
    relationCreateOutput,
    relationModifyOutput,
  ].flat(),
)

test('Test full changeset with all data entries', () => {
  const actualOutput = realChangesetParser({ elements: inputElements })
  expectedOutput.features = expectedOutput.features.flat()
  expect(actualOutput).toEqual(expectedOutput)
})
