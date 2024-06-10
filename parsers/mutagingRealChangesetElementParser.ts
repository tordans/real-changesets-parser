import createBbox from '@turf/bbox'
import createBboxPolygon from '@turf/bbox-polygon'
import { featureCollection, lineString, point, polygon } from '@turf/helpers'
import * as ak from 'id-area-keys'
import * as R from 'ramda'

type Data = {
  type: string
  lat?: number
  lon?: number
  nodes?: Node[]
  tags?: any
}

type Node = {
  lat: number
  lon: number
}

// This method is not exported by the index.js. We only use it for `realChangesetParser` so we don't have to clone twice.
export function mutatingRealChangesetElementParser(mutatingJson: any) {
  function createFeature(data: Data) {
    switch (data.type) {
      case 'node':
        return createNode(data)
      case 'way':
        return createWay(data)
      case 'relation':
        return createRelation(data)
    }
  }

  function createNode(data: Data) {
    if (data.lat !== undefined && data.lon !== undefined) {
      const geometry = [data.lon, data.lat].map(Number)
      const properties = R.omit(['lon', 'lat'], data)
      return point(geometry, properties)
    }
  }

  function createWay(data) {
    if (data.nodes.length === 0) {
      return
    }
    const geometry = data.nodes
      .filter(function (node) {
        return Object.keys(node).includes('lat') && Object.keys(node).includes('lon')
      })
      .map(function (node) {
        return [node.lon, node.lat].map(Number)
      })
    const properties = R.omit(['nodes'], data)

    if (data.tags && ak.isArea(data.tags) && isClosedWay(data.nodes)) {
      return R.omit(['bbox'], polygon([geometry], properties))
    } else {
      return R.omit(['bbox'], lineString(geometry, properties))
    }
  }

  function createRelation(data) {
    if ('members' in data) {
      data.relations = data.members.map(createFeature).filter(R.complement(R.isNil)) // filter out nulls
      const feature = createBboxPolygon(createBbox(featureCollection(data.relations)))
      feature.properties = R.omit(['members'], data)
      return R.omit(['bbox'], feature)
    }
    return null
  }

  // If the feature was deleted, copy its
  // geometry from the old feature
  if (mutatingJson.action === 'delete') {
    switch (mutatingJson.type) {
      case 'node':
        mutatingJson.lon = mutatingJson.old.lon
        mutatingJson.lat = mutatingJson.old.lat
        break
      case 'way':
        mutatingJson.nodes = mutatingJson.old.nodes
        break
      case 'relation':
        mutatingJson.members = mutatingJson.old.members
        break
    }
  }

  // Set change type
  switch (mutatingJson.action) {
    case 'create':
      mutatingJson.changeType = 'added'
      break
    case 'delete':
      mutatingJson.changeType = 'deletedNew'
      mutatingJson.old.changeType = 'deletedOld'
      break
    case 'modify':
      mutatingJson.changeType = 'modifiedNew'
      mutatingJson.old.changeType = 'modifiedOld'
      break
  }

  // Add `tagsCount` to feature properties
  mutatingJson.tagsCount = Object.keys(mutatingJson?.tags || {}).length
  if (mutatingJson.old) {
    mutatingJson.old.tagsCount = Object.keys(mutatingJson.old?.tags || {}).length
  }

  return (
    'old' in mutatingJson ? [R.omit(['old'], mutatingJson), mutatingJson.old] : [mutatingJson]
  ).map(createFeature)
}

function isClosedWay(nodes) {
  // Each LinearRing of a Polygon must have 4 or more Positions
  if (nodes.length > 3) {
    const firstNode = nodes[0]
    const lastNode = nodes[nodes.length - 1]
    return (
      Object.keys(firstNode).includes('lat') &&
      Object.keys(firstNode).includes('lon') &&
      Object.keys(lastNode).includes('lat') &&
      Object.keys(lastNode).includes('lon') &&
      firstNode.lat === lastNode.lat &&
      firstNode.lon === lastNode.lon
    )
  }
  return false
}
