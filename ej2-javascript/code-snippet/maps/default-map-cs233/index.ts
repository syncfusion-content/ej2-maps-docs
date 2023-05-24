

import { world_map } from './world-map.ts';
import { Maps, MapsTooltip } from '@syncfusion/ej2-maps';
Maps.Inject(MapsTooltip);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        tooltipSettings: {
            visible: true,
            valuePath: 'name'
        }
    }]
});
map.appendTo('#element');


