

import { world_map } from './world-map.ts';
import { Maps , Marker, MarkerSettings } from '@syncfusion/ej2-maps';
Maps.Inject(Marker);
// initialize Maps component
let map: Maps = new Maps({
    layers: [
        {
            shapeData: world_map,
            markerSettings: [
                {
                    dataSource: [
                       { latitude: 37.6276571, longitude: -122.4276688, city: 'San Bruno' },
                    ],
                    visible:true,
                    shape:'Circle',
                    fill:'white',
                    width:3,
                    animationDuration:0,
                    border:{width:2,color:'#333'}
                },
                {
                    dataSource: [
                        { latitude: 33.5302186, longitude: -117.7418381, city: 'Laguna Niguel' },
                    ],
                    visible:true,
                    shape:'Rectangle',
                    fill:'yellow',
                    width:15,
                    height:4,
                    animationDuration:0,
                    border:{width:2,color:'#333'}
                },
                {
                    dataSource: [
                         { latitude: 40.7424509, longitude: -74.0081468, city: 'New York' }
                    ],
                    visible:true,
                    shape:'Diamond',
                    fill:'white',
                    width:10,
                    height:10,
                    animationDuration:0,
                    border:{width:2,color:'blue'}
                }
            ]
        }
    ]
});
map.appendTo('#element'); // render initialized Map.


