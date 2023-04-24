


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
                border: {
                  color: 'green',
                  width: 2
                },
                fill: 'transparent',
                opacity: 0.9,
                textStyle: {
                  size: '17px',
                  fontStyle: 'Sans-serif',
                  fontWeight: 'normal'
                },
            },
            shapeSettings: {
              autofill: true
            },
            tooltipSettings: {
              visible: true,
              valuePath: 'name'
            },
        }
    ]
});
map.appendTo('#element');



