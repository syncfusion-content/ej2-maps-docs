

import { world_map } from './world-map.ts';
import { Maps, Marker, MapsTooltip } from '@syncfusion/ej2-maps';
Maps.Inject(Marker, MapsTooltip );
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            fill: '#C3E6ED'
        },
        markerSettings: [
            {
                enableDrag: true,
                dataSource: [
                     { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'MarkerOne' },
                     { latitude: 59.88893689676585, longitude: -109.3359375, name:'MarkerTwo'},
                     { latitude: -6.64607562172573, longitude: -55.54687499999999 , name:'MarkerThree'},
                     { latitude: 23.644385824912135, longitude: 77.83189239539234  , name:'MarkerFour'},
                     { latitude: 63.66569332894224, longitude: 98.2225173953924 , name:'MarkerFive'}
                ],
                visible: true,
                animationDuration: 0,
                shape: 'Balloon',
                width: 20,
                height: 20,
                border: { width: 2, color: '#285255' },
                 tooltipSettings: {
                     visible: true,
                     valuePath: 'name',
                 }
            },
        ]
    }]
});
map.appendTo('#element');


