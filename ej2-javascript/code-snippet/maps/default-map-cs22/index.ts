

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true,
            palette: ['#C7DE6C', '#59A076', '#88D0BC', '#FEA78C', '#FFC557'],
            border: {
                color: '#FEE1DD',
                width: 3
            },
            dashArray: '1',
            opacity: 0.9
        }
    }]
});

map.appendTo('#element');


