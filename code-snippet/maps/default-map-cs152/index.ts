

import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { unCountries } from './data.ts';

let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'Country',
        shapePropertyPath: 'name',
        dataSource : unCountries,
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                {
                    value: 'Permanent',
                    color: '#C3E6ED'
                },
                {
                    color: '#F1931B',
                    value: 'Non-Permanent'
                }
            ],
            colorValuePath: 'Membership'
        }
    }]
});

map.appendTo('#element');


