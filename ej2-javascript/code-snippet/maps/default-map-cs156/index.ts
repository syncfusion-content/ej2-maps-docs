

import { world_map } from './world-map.ts';
import { Maps, Bubble } from '@syncfusion/ej2-maps';
Maps.Inject(Bubble);
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
            valuePath: 'population',
            colorValuePath: 'population',
            colorMapping: [{
                 value: '38332521',
                 color: '#C3E6ED'
            },
            {
                value: '19651127',
                color: '#F1931B'
            },
            {
                value: '3090416',
                color: 'blue'}
            ]
        }]
    }]
});
map.appendTo('#element');


