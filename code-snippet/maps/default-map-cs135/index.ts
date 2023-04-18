

import { usa_map } from './usa.ts';
import { Maps , Marker,MapsTooltip, MarkerSettings } from '@syncfusion/ej2-maps';
Maps.Inject(Marker, MapsTooltip);
// initialize Maps component
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            markerSettings: [
                {
                    dataSource: [
                        { latitude: 40.7424509, longitude: -74.0081468, city: 'New York' }
                    ],
                    visible:true,
                    shape:'Circle',
                    fill:'white',
                    width:3,
                    animationDuration:0,
                    border: { width:2, color:'green'},
                    tooltipSettings: {
                        visible: true,
                        valuePath:'city'
                    }
                }
            ]
        }
    ],
    height: '450px',
    width: '700px'
});
map.appendTo('#element');


