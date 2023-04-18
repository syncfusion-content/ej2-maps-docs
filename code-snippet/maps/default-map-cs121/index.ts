

import { world_map } from './world-map.ts';
import { Maps, Bubble, Legend} from '@syncfusion/ej2-maps';
Maps.Inject(Bubble, Legend);
let map: Maps = new Maps({
    legendSettings: {
        visible: true,
        type: 'Bubbles'
    },
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            minRadius: 20,
            dataSource: [
                { color: 'green', name: 'India', population: '38332521' },
                { color: 'purple', name: 'New Zealand', population: '19651127' },
                { color: 'blue', name: 'Pakistan', population: '3090416' }
            ],
            maxRadius: 40,
            colorValuePath: 'color',
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');


