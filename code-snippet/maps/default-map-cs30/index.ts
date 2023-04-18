

import { world_map } from './world-map.ts';
import { Maps,Zoom, ZoomSettings } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);

// initialize Maps component
let map: Maps = new Maps({
    zoomSettings:{
    enable: true,
    zoomFactor:13
    },
    centerPosition: {
        latitude: 25.54244147012483,
        longitude: -89.62646484375
    },
       layers: [
        {
            shapeData: world_map
        }
    ]
}, '#element');


