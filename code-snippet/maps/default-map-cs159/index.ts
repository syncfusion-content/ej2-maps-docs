

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

let map: Maps = new Maps({
    background: '#CCD1D1',
    border: {
        color: 'green',
        width: 2
    },
    margin: {
        bottom: 10,
        left: 20,
        right: 20,
        top: 10
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true
        }
    }]
});

map.appendTo('#element');


