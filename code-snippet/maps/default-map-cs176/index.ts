


import { Maps, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(DataLabel, MapsTooltip);

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
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        }
    ]
});
map.appendTo('#element');



