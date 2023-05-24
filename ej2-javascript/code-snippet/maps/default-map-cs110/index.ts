

import { world_map } from './world-map.ts';
import { usa_map } from '../default-map-cs1/usa.ts';
import { Maps} from '@syncfusion/ej2-maps';
let map: Maps = new Maps({
    baseLayerIndex: 1,
    layers: [
        {
           shapeData: world_map,
        },
        {
           shapeData: usa_map
        }
   ]
});
map.appendTo('#element');


