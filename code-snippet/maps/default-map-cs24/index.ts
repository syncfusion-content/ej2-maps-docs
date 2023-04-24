

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        dataSource: [
            { continent: "North America", color: '#71B081', borderColor: '#CCFFE5', width: 2 },
            { continent: "South America", color: '#5A9A77', borderColor: 'red', width: 2 },
            { continent: "Africa", color: '#498770', borderColor: '#FFCC99', width: 2 },
            { continent: "Europe", color: '#39776C', borderColor: '#66B2FF', width: 2 },
            { continent: "Asia", color: '#266665', borderColor: '#999900', width: 2 },
            { continent: "Oceania", color: '#124F5E', borderColor: 'blue', width: 2 }
        ],
        shapeSettings: {
            borderColorValuePath: 'borderColor',
            borderWidthValuePath: 'width',
            colorValuePath: 'color'
        }
    }]
});

map.appendTo('#element');


