import { featureCollection } from '@turf/helpers'
import { expect, test } from 'vitest'
import { realChangesetParser } from '../../index.js'
import { nodeCreateInput } from '../data-elements/node-create-input.js'
import { nodeCreateOutput } from '../data-elements/node-create-output.js'
import { nodeDeleteInput } from '../data-elements/node-delete-input.js'
import { nodeDeleteOutput } from '../data-elements/node-delete-output.js'
import { nodeModifyInput } from '../data-elements/node-modify-input.js'
import { nodeModifyOutput } from '../data-elements/node-modify-output.js'
import { relationCreateInput } from '../data-elements/realtion-create-input.js'
import { relationCreateOutput } from '../data-elements/realtion-create-output.js'
import { relationInRelationInput } from '../data-elements/relation-in-relation-input.js'
import { relationInRelationOutput } from '../data-elements/relation-in-relation-output.js'
import { relationModifyInput } from '../data-elements/relation-modify-input.js'
import { relationModifyOutput } from '../data-elements/relation-modify-output.js'
import { wayCreateInput } from '../data-elements/way-create-input.js'
import { wayCreateOutput } from '../data-elements/way-create-output.js'
import { wayDeleteInput } from '../data-elements/way-delete-input.js'
import { wayDeleteOutput } from '../data-elements/way-delete-output.js'
import { wayModifyInput } from '../data-elements/way-modify-input.js'
import { wayModifyOutput } from '../data-elements/way-modify-output.js'

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
