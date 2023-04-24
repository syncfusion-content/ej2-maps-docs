

import { Maps , Zoom} from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
    },
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
        }
    ]
});
map.appendTo('#element');



