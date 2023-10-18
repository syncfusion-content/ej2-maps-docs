

import { world_map } from './world-map.ts';
import { cluster } from './cluster.ts'
import { Maps , Marker,MapsTooltip, Point } from '@syncfusion/ej2-maps';
Maps.Inject(Marker,MapsTooltip);
// initialize Maps component
let map: Maps = new Maps({
    zoomSettings: {
        enable: true
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            fill: '#C1DFF5'
        },
        markerClusterSettings: {
            allowClustering: true,
            allowClusterExpand: true,
            shape: 'Circle',
            height: 40,
            width: 40,
            labelStyle : { color: 'white'},
            offset: new Point(10, 20),
            opacity: 0.9,
            fill: 'green',
            connectorLineSettings: {
                color: 'orange',
                opacity: 0.8,
                width: 2
            }
        },
        markerSettings: [{
            visible: true,
            dataSource: cluster,
            shape: 'Balloon',
            tooltipSettings: {
                format: 'City: ${city} <br> Area: ${area}',
                visible: true,
                valuePath: 'area',
            },
            height: 20,
            width: 20,
            animationDuration: 0
        }]
    }]
});
map.appendTo('#element');


