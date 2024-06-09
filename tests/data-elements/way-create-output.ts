import { OutputType } from './output-type'

export const wayCreateOutput: OutputType = [
  {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [69.4159455, 41.1770844],
        [69.4141889, 41.1747196],
        [69.4141889, 41.1745315],
        [69.414089, 41.1743864],
        [69.4139001, 41.174353],
        [69.412593, 41.1730232],
        [69.4125334, 41.1729767],
      ],
    },
    properties: {
      id: '479415438',
      version: '1',
      timestamp: '2017-03-09T04:16:26Z',
      changeset: '46698437',
      uid: '294224',
      user: 'Garpul',
      action: 'create',
      type: 'way',
      tagsCount: 1,
      tags: {
        waterway: 'ditch',
      },
      changeType: 'added',
    },
  },
]
