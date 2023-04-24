

import { Maps, Legend } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { Population_Density } from './data.ts';
Maps.Inject(Legend);
let map: Maps = new Maps({
    legendSettings: {
        visible: true,
        toggleLegendSettings: {
            enable: true,
            applyShapeSettings: false,
            border: {
                color: 'green',
                width: 2
            }
        }
    },
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: Population_Density,
        shapeSettings: {
            colorValuePath: 'density',
            colorMapping: [
                {
                    from: 0, to: 100, color: 'rgb(153,174,214)',
                },
                {
                    from: 101, to: 200, color: 'rgb(115,143,199)',
                },
                {
                    color: 'rgb(77,112,184)'
                },
            ]
        }
    }]
});

map.appendTo('#element');


