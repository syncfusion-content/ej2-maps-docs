

import { world_map } from './world-map.ts';
import { markerDataSource } from './markerdata.ts';
import { Maps, Marker, Legend} from '@syncfusion/ej2-maps';
Maps.Inject(Marker, Legend);
let map: Maps = new Maps({
   legendSettings: {
    visible: true,
    type: 'Markers',
    useMarkerShape:true,
    toggleLegendSettings: {
      enable: true,
      applyShapeSettings: false,
      border: {
        color: 'green',
        width: 2
      }
    }
  },
  layers: [
    {
      shapeDataPath: 'name',
      shapePropertyPath: 'name',
      shapeData: world_map,
      shapeSettings: {
        fill: '#E5E5E5'
      },
      markerSettings: [
        {
          dataSource: markerDataSource,
          colorValuePath: 'color',
          shapeValuePath:'shape',
          legendText: 'country',
          visible: true
        }
      ]
    }
  ]
});
map.appendTo('#element');


