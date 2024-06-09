import { featureCollection } from '@turf/helpers'
import { expect, test } from 'vitest'
import { realChangesetParser } from '../../index.js'
import { nodeCreateInput } from '../data/node-create-input.js'
import { nodeCreateOutput } from '../data/node-create-output.js'
import { nodeDeleteInput } from '../data/node-delete-input.js'
import { nodeDeleteOutput } from '../data/node-delete-output.js'
import { nodeModifyInput } from '../data/node-modify-input.js'
import { nodeModifyOutput } from '../data/node-modify-output.js'
import { relationCreateInput } from '../data/realtion-create-input.js'
import { relationCreateOutput } from '../data/realtion-create-output.js'
import { relationInRelationInput } from '../data/relation-in-relation-input.js'
import { relationInRelationOutput } from '../data/relation-in-relation-output.js'
import { relationModifyInput } from '../data/relation-modify-input.js'
import { relationModifyOutput } from '../data/relation-modify-output.js'
import { wayCreateInput } from '../data/way-create-input.js'
import { wayCreateOutput } from '../data/way-create-output.js'
import { wayDeleteInput } from '../data/way-delete-input.js'
import { wayDeleteOutput } from '../data/way-delete-output.js'
import { wayModifyInput } from '../data/way-modify-input.js'
import { wayModifyOutput } from '../data/way-modify-output.js'

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
  // @ts-expect-error "Type '"Polygon"' is not assignable to type '"LineString"'." – No idea why this is complaining
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
