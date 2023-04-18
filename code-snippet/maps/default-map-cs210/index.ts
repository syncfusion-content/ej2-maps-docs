


import { Maps } from '@syncfusion/ej2-maps';
import { Africa_Continent } from './Africa_Continent.ts';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
        },
        {
            shapeData: Africa_Continent,
            type: 'SubLayer',
            shapeSettings: {
                fill: "blue"
            }
        }
    ]
});
map.appendTo('#element');



