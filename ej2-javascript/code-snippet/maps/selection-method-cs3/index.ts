

import { world_map } from '../default-map-cs1/world-map.ts';
import { Maps, Selection } from '@syncfusion/ej2-maps';
Maps.Inject(Selection);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        }
    }]
});
map.appendTo('#element');
document.getElementById('selection').onclick = () => {
    map.shapeSelection(0, "continent", "Asia", true);
};
document.getElementById('unselection').onclick = () => {
    map.shapeSelection(0, "continent", "Asia", false);
};


