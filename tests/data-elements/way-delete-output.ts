import { OutputType } from './output-type'

export const wayDeleteOutput: OutputType = [
  {
    type: 'Feature',
    properties: {
      id: '225114960',
      visible: 'false',
      version: '2',
      timestamp: '2017-03-09T04:16:08Z',
      changeset: '46698136',
      uid: '2954928',
      user: 'AlexLabrada',
      action: 'delete',
      type: 'way',
      tags: {},
      changeType: 'deletedNew',
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [-82.3838192, 23.0884213],
        [-82.3836481, 23.0884213],
        [-82.3836481, 23.0883753],
        [-82.3838192, 23.0883753],
        [-82.3838192, 23.0884213],
      ],
    },
  },
  {
    type: 'Feature',
    properties: {
      id: '225114960',
      version: '1',
      timestamp: '2013-06-10T16:00:15Z',
      changeset: '16497736',
      uid: '1339560',
      user: 'westner',
      action: 'delete',
      type: 'way',
      tags: {
        building: 'yes',
        source: 'Bing',
      },
      changeType: 'deletedOld',
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-82.3838192, 23.0884213],
          [-82.3836481, 23.0884213],
          [-82.3836481, 23.0883753],
          [-82.3838192, 23.0883753],
          [-82.3838192, 23.0884213],
        ],
      ],
    },
  },
]
