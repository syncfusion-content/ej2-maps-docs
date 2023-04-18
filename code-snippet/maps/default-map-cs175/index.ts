


import { Maps, Legend, DataLabel } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Legend, DataLabel);
let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
            }
        }
    ]
});
map.appendTo('#element');



