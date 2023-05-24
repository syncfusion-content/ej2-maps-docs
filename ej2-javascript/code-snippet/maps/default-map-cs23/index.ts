

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        dataSource: [
            { continent: "North America", color: '#71B081' },
            { continent: "South America", color: '#5A9A77' },
            { continent: "Africa", color: '#498770' },
            { continent: "Europe", color: '#39776C' },
            { continent: "Asia", color: '#266665' },
            { continent: "Oceania", color: '#124F5E' }
        ],
        shapeSettings: {
            colorValuePath: 'color'
        }
    }]
});

map.appendTo('#element');


