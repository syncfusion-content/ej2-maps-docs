

import { world_map } from './world-map.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        toolbarSettings:{
            tooltipSettings:{
                visible:true,
                borderWidth:2,
                borderColor:'green',
                fontColor:'black',
                fill:'violet',
                fontFamily:'Times New Roman',
                fontWeight:200,
                fontSize:'22px',
                fontOpacity:1
            },
            buttonSettings: {
               toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
            }
        }
    },
    layers: [
        {
            shapeData: world_map,
            shapeSettings: {
                fill: '#C1DFF5'
            }
        }
    ]
});
map.appendTo('#element');


