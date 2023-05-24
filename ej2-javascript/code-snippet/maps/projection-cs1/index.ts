

import { Maps, ProjectionType } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { projectionData } from './projection-data.ts';

let map: Maps = new Maps({
    projectionType: 'Mercator',
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'Country',
        shapePropertyPath: 'name',
        dataSource: projectionData,
        tooltipSettings: {
            visible: true,
            valuePath: 'Country'
        },
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                {
                    value: 'Permanent',
                    color: '#EDB46F'
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

map.appendTo('#container');
document.getElementById('projectiontype').onchange = function(){
    let ele: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('projectiontype'))
    maps.projectionType = <ProjectionType>ele.value;
    maps.refresh();
}


