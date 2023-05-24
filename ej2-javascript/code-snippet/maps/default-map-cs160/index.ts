

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

let map: Maps = new Maps({
    mapsArea: {
        background: '#CCD1D1',
        border: {
            width: 2,
            color: 'green'
        }
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true
        }
    }]
});

map.appendTo('#element');


