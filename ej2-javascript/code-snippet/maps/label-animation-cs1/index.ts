


import { usa_map } from './usa.ts';
import { Maps, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel, MapsTooltip);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Hide',
                intersectionAction: 'Trim',
                animationDuration: 2000,
            },
            shapeSettings: {
                autofill: true,
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name',
            },
        }
    ]
});
map.appendTo('#element');



