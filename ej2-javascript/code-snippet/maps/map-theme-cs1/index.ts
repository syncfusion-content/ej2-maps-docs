

import { Maps, MapsTheme } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true
        }
    }]
});

map.appendTo('#container');
document.getElementById('theme').onchange = () => {
    var value = (<HTMLInputElement>document.getElementById('theme')).value;
    map.theme= <MapsTheme>value;
    map.refresh();
}


