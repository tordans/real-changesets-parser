import { featureCollection } from '@turf/helpers'
import { realChangesetElementParser } from '../index.js'

export const realChangesetParser = (input: any) => {
  const { elements } = input
  const parsedElements = elements.map((element) => realChangesetElementParser(element))
  const flatElements = parsedElements.flat()
  const cleanElements = flatElements.filter(Boolean)
  return featureCollection(cleanElements)
}
