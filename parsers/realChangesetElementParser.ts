import { mutatingRealChangesetElementParser } from './mutagingRealChangesetElementParser.js'

export function realChangesetElementParser(mutatingJson: any) {
  const closedJson = structuredClone(mutatingJson)
  return mutatingRealChangesetElementParser(closedJson)
}
