


import { usa_map } from './usa.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                intersectionAction: 'Trim'
            }
        }
    ]
});
map.appendTo('#element');



