import { featureCollection } from '@turf/helpers'
import { ElementParser } from './parsers/element'

export const changesetParser = (input: any) => {
  const { elements } = input
  const parsedElements = elements.map((element) => ElementParser(element))
  const flatElements = parsedElements.flatten()
  return featureCollection(flatElements)
}
;(changesetParser as any).elementParser = ElementParser
export default changesetParser
