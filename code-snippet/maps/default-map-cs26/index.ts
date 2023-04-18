

import { world_map } from './world-map.ts';
import { Africa_Continent } from './Africa_Continent.ts';
import { default_data } from './data.ts';
import { Maps,Highlight,IShapeSelectedEventArgs,shapeSelected,Marker} from '@syncfusion/ej2-maps';
Maps.Inject(Highlight,Marker );

export interface ShapeData {
    continent?: string;
}

// Initialize Maps component.
let map: Maps = new Maps({
    shapeSelected: (args: IShapeSelectedEventArgs): void => {
        let shape: string = (args.shapeData as ShapeData).continent;
        if (shape === 'Africa') {
            map.baseLayerIndex = 1;
            map.refresh();
        }
    },
    layers: [
        {
            layerType: 'Geometry',
            shapeData: world_map,
            shapePropertyPath: 'continent',
            shapeDataPath: 'continent',
            dataSource:default_data,
            shapeSettings: {
                colorValuePath: 'drillColor'
            },
            markerSettings: [{
                visible: true,
                template: '<div id="marker3" class="markerTemplate">Africa' +
                    '</div>',
                dataSource: [
                    { latitude: 10.97274101999902, longitude: 16.390625 }
                ],
                animationDuration: 0
            }]
        },
        {
            layerType: 'Geometry',
            shapeData: Africa_Continent,
            shapeSettings: {
                fill: '#80306A'
            },
            highlightSettings: {
                enable: true,
                fill: '#80306A'
            }
        }
    ]
});
map.appendTo('#element');



