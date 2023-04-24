

import { world_map } from './world-map.ts';
import { cluster } from './cluster.ts'
import { Maps , Marker,MapsTooltip, MarkerSettings } from '@syncfusion/ej2-maps';
Maps.Inject(Marker,MapsTooltip);
// initialize Maps component
let map: Maps = new Maps({
    useGroupingSeparator: true,
    format: 'n',
    zoomSettings: {
        enable: true
    },
    titleSettings: {
        text: 'Top 13 largest cities in the World',
        textStyle: {
            size: '16px'
        }
    },
    layers: [
        {
            shapeData: world_map,
            shapeSettings: {
                fill: '#C1DFF5'
            },
            markerClusterSettings: {
                allowClustering: true,
                shape: 'Circle',
                height: 40,
                width: 40,
                labelStyle : { color: 'white'},
            },
            markerSettings: [
                {
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
                },
            ]
        }
    ]
});
map.appendTo('#element');


