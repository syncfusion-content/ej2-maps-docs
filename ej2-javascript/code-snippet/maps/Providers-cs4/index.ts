


import { Maps } from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
        }
    ]
});
map.appendTo('#element');



