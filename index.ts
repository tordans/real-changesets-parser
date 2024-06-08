import { featureCollection } from '@turf/helpers'
import * as R from 'ramda'
import { ElementParser } from './parsers/element'

const changesetParser = R.pipe(
  R.prop(['elements']),
  R.map(ElementParser),
  R.flatten,
  featureCollection,
)

;(changesetParser as any).elementParser = ElementParser
export default changesetParser
