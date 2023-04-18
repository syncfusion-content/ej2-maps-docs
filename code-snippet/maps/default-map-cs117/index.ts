

import { Maps, Legend } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { default_data } from './data.ts';
Maps.Inject(Legend);
let map: Maps = new Maps({
    legendSettings: {
        visible: true,
        showLegendPath:'visibility'
    },
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'continent',
        shapePropertyPath: 'continent',
        dataSource: default_data,
        shapeSettings:{
            colorValuePath:'color'
        }
    }]
});

map.appendTo('#element');


