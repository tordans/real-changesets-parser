import createBbox from '@turf/bbox'
import createBboxPolygon from '@turf/bbox-polygon'
import * as turf from '@turf/helpers'
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

export function ElementParser(json: any) {
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
      return turf.point(geometry, properties)
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
    const { nodes: omit, ...properties } = data

    if (data.tags && ak.isArea(data.tags) && isClosedWay(data.nodes)) {
      return R.omit(['bbox'], turf.polygon([geometry], properties))
    } else {
      return R.omit(['bbox'], turf.lineString(geometry, properties))
    }
  }

  function createRelation(data) {
    if ('members' in data) {
      data.relations = data.members.map(createFeature).filter(R.complement(R.isNil)) // filter out nulls
      const { member: omit, ...properties } = data
      const feature = createBboxPolygon(createBbox(turf.featureCollection(data.relations)), {
        properties,
      })
      delete feature.bbox
      return feature
    }
    return null
  }

  // If the feature was deleted, copy its
  // geometry from the old feature
  if (json.action === 'delete') {
    switch (json.type) {
      case 'node':
        json.lon = json.old.lon
        json.lat = json.old.lat
        break
      case 'way':
        json.nodes = json.old.nodes
        break
      case 'relation':
        json.members = json.old.members
        break
    }
  }

  // Set change type
  switch (json.action) {
    case 'create':
      json.changeType = 'added'
      break
    case 'delete':
      json.changeType = 'deletedNew'
      json.old.changeType = 'deletedOld'
      break
    case 'modify':
      json.changeType = 'modifiedNew'
      json.old.changeType = 'modifiedOld'
      break
  }

  return ('old' in json ? [R.omit(['old'], json), json.old] : [json]).map(createFeature)
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
