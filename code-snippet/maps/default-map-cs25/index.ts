

import { Africa_Continent } from './Africa_Continent.ts';
import { Maps, Annotations } from '@syncfusion/ej2-maps';
Maps.Inject(Annotations);

// initialize Maps component
let map: Maps = new Maps({
    layers: [
        {
            shapeData: Africa_Continent,
            shapeSettings: {
                fill: 'url(#grad1)'
            }
        }
    ],
    annotations: [
        {
            content:'#maps-annotation', // To insert the text content
            x: '0%', y: '70%'
        },
        {
            content: '#compass-maps', // To insert the image
            x: '80%', y: '5%'
        }
    ]
}, '#element');



