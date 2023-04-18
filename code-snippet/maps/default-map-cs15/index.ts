

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { Population_Density } from './data.ts';

let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: Population_Density,
        shapeSettings: {
            colorValuePath: 'density',
            colorMapping: [
                {
                    from: 0, to: 100, color: ['red','blue']
                },
                {
                    from: 101, to: 200, color: ['green','yellow']
                }
            ]
        }
    }]
});

map.appendTo('#element');


