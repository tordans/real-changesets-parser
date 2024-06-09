import { OutputType } from './output-type'

export const relationCreateOutput: OutputType = [
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [69.4121703, 41.1727006],
          [69.4125334, 41.1727006],
          [69.4125334, 41.1729767],
          [69.4121703, 41.1729767],
          [69.4121703, 41.1727006],
        ],
      ],
    },
    properties: {
      id: '7052847',
      version: '1',
      timestamp: '2017-03-09T04:16:26Z',
      changeset: '46698437',
      uid: '294224',
      user: 'Garpul',
      action: 'create',
      type: 'relation',
      tagsCount: 2,
      tags: {
        layer: '1',
        type: 'bridge',
      },
      changeType: 'added',
      relations: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [69.4125334, 41.1729767],
              [69.4122345, 41.1727494],
              [69.4121703, 41.1727006],
            ],
          },
          properties: {
            type: 'way',
            ref: '479415436',
            role: 'under',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [69.4122523, 41.1728039],
              [69.4123385, 41.1728695],
              [69.412422, 41.1729331],
              [69.4124723, 41.1729715],
              [69.4125266, 41.1729113],
              [69.4124644, 41.172866],
              [69.4123807, 41.1728051],
              [69.4123035, 41.1727489],
              [69.4122523, 41.1728039],
            ],
          },
          properties: {
            type: 'way',
            ref: '479415437',
            role: 'outline',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [69.4124644, 41.172866],
              [69.412422, 41.1729331],
            ],
          },
          properties: {
            type: 'way',
            ref: '190556428',
            role: 'admin_centre',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [69.4123385, 41.1728695],
              [69.4123807, 41.1728051],
            ],
          },
          properties: {
            type: 'way',
            ref: '190556430',
            role: 'admin_centre',
          },
        },
      ],
    },
  },
]
