import { featureCollection } from '@turf/helpers'
import { mutatingRealChangesetElementParser } from './mutagingRealChangesetElementParser.js'

export const realChangesetParser = (input: any | undefined | null) => {
  if (!input) return featureCollection([])

  const elements = structuredClone(input.elements)
  const parsedElements = elements.map((element) => mutatingRealChangesetElementParser(element))
  const flatElements = parsedElements.flat()
  const cleanElements = flatElements.filter(Boolean)
  return featureCollection(cleanElements)
}
