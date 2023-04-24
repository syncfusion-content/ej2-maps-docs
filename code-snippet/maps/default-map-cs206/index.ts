

import { world_map } from './world-map.ts';
import { Maps, NavigationLine } from '@syncfusion/ej2-maps';
Maps.Inject(NavigationLine);
let map: Maps = new Maps({
    layers: [{
        navigationLineSettings: [{
            visible: true,
            latitude: [40.7128, 36.7783],
            longitude: [-74.0060, -119.4179],
            color: 'black',
            angle: 90,
            width: 2,
            dashArray: '4'
        }],
        shapeData: world_map,
    }]
});
map.appendTo('#element');


