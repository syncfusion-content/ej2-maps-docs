

import { world_map } from './world-map.ts';
import { Maps, Marker} from '@syncfusion/ej2-maps';
Maps.Inject(Marker);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        markerSettings: [
            {
                visible: true,
                height: 20,
                width: 20,
                dataSource: [
                    { latitude: 49.95121990866204, longitude: 18.468749999999998 },
                    { latitude: 59.88893689676585, longitude: -109.3359375 },
                    { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                ],
                animationDuration: 0,
            },
        ]
    }]
});
map.appendTo('#element');


