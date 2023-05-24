

import { world_map } from './world-map.ts';
import { Maps , Marker, MarkerSettings } from '@syncfusion/ej2-maps';

// Initialize Map component.
let map: Maps = new Maps({
    // Initializing Map with Marker settings.
    layers: [
        {
            shapeData: world_map,
            markerSettings: [
                {
                    dataSource: [
                       { latitude: 40.7424509, longitude: -74.0081468, city: 'New York' }
                    ],
                    visible:true,
                    shape:'Circle',
                    fill:'white',
                    width:3,
                    animationDuration:0,
                    border:{width:2,color:'#333'}
                }
            ]
        }
    ]
});
map.appendTo('#element');  // render initialized Map.


