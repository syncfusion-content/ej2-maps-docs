


import { Maps, Annotations } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Annotations);
let map: Maps = new Maps({
   annotations: [
            {
                content: '<div id="first"><h1>Maps</h1></div>',
                verticalAlignment: 'Center',
                horizontalAlignment: 'Center',
                x: '20%', y: '50%',
                zIndex: '-1'
            }
   ],
   layers: [
        {
             shapeData: world_map
        }
    ]
});
map.appendTo('#element');



