> [!INFO]
> This is a typescript version of https://github.com/mapbox/real-changesets-parser which was archived by Mapbox in 2024.
> The location in this repo is temporary. It should be move to https://github.com/OSMCha
> The npm package is not changed, yet.
> The imports have changed and the package is ESM only.

Convert JSONs returned by [osm-adiff-parser](https://github.com/mapbox/osm-adiff-parser) to extended GeoJSONs.

**Setup**

```json
"dependencies": {
  "real-changesets-parser": "github:tordans/real-changesets-parser"
}
```

```sh
# npm install real-changesets-parser
```

**Usage**

```js
import { realChangesetParser, realChangesetElementParser } from 'real-changesets-parser'

const processAll = realChangesetParser(json) // => geojson feature collection
const processOne = realChangesetElementParser(json.elements[0]) // => geojson feature array
```
