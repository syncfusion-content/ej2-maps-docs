

import { world_map } from './world-map.ts';
import { Maps, Bubble, MapsTooltip } from '@syncfusion/ej2-maps';
Maps.Inject(Bubble, MapsTooltip);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            minRadius: 5,
            dataSource: [
                { name: 'India', population: '38332521' },
                { name: 'New Zealand', population: '19651127' },
                { name: 'Pakistan', population: '3090416' }
            ],
            maxRadius: 80,
            valuePath: 'population',
             tooltipSettings: {
                visible: true,
                valuePath: 'population',
            },
        }]
    }]
});
map.appendTo('#element');


