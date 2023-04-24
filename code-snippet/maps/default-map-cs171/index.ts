


import { Maps } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
let map: Maps = new Maps({
   layers: [
        {
            shapeData: world_map,
            dataSource: [
                { "Country": "China", "Membership": "Permanent" },
                { "Country": "France", "Membership": "Permanent" },
                { "Country": "Russia", "Membership": "Permanent" },
                { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
                { "Country": "Poland", "Membership": "Non-Permanent" },
                { "Country": "Sweden", "Membership": "Non-Permanent" }],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country'
        }
    ]
});
map.appendTo('#element');



