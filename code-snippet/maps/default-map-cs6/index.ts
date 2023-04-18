

import { world_map } from './world-map.ts';
import { Maps, Bubble } from '@syncfusion/ej2-maps';
Maps.Inject(Bubble);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            bubbleType: 'Square',
            visible: true,
            dataSource: [
                { name: 'India', population: '38332521' },
                { name: 'Pakistan', population: '3090416' }
            ],
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');


