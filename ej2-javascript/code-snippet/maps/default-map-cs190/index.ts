

import { world_map } from './world-map.ts';
import { Maps, Marker, Legend} from '@syncfusion/ej2-maps';
Maps.Inject(Marker, Legend);
let map: Maps = new Maps({
    legendSettings: {
        visible: true,
        type: 'Markers'
    },
    layers: [{
        shapeData: world_map,
        markerSettings: [
            {
                visible: true,
                legendText: 'city',
                dataSource: [
                    { latitude: 37.0000, longitude: -120.0000, city: 'California' },
                    { latitude: 40.7127, longitude: -74.0059, city: 'New York' },
                    { latitude: 42, longitude: -93, city: 'Iowa' }
                ]
            }
        ]
    }]
});
map.appendTo('#element');


