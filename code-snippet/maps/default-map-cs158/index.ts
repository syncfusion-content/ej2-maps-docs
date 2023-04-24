

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

let map: Maps = new Maps({
    titleSettings: {
        text: 'Maps Control',
        textStyle: {
            color: 'red',
            fontStyle: 'italic',
            fontWeight: 'regular',
            fontFamily: 'arial',
            size: '14px'
        },
        alignment: 'Center'
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true
        }
    }]
});

map.appendTo('#element');


