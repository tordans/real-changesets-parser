import { featureCollection } from '@turf/helpers'
import { mutatingRealChangesetElementParser } from './realChangesetElementParser.js'

export const realChangesetParser = (input: any) => {
  const elements = structuredClone(input.elements)
  const parsedElements = elements.map((element) => mutatingRealChangesetElementParser(element))
  const flatElements = parsedElements.flat()
  const cleanElements = flatElements.filter(Boolean)
  return featureCollection(cleanElements)
}
