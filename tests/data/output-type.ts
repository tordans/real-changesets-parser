export type OutputType = (
  | GeoJSON.Feature<GeoJSON.LineString, Record<string, string | {}>>
  | GeoJSON.Feature<GeoJSON.Polygon, Record<string, string | {}>>
  | GeoJSON.Feature<GeoJSON.Point, Record<string, string | {}>>
)[]
