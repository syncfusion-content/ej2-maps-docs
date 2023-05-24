

import { seat } from './seat.ts';
import { Maps,Selection } from '@syncfusion/ej2-maps';
Maps.Inject(Selection);
// initialize Maps component
let map: Maps = new Maps({
        layers: [
        {
            geometryType: 'Normal',
            shapeData: seat,
            selectionSettings: {
                enable: true,
                opacity: 1,
                enableMultiSelect: true
            }
        }
    ],
    height: '400'
}, '#container');



