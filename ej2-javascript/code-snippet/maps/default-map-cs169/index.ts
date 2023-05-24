


import { usa_map } from './usa.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeDataPath: 'Name',
            shapePropertyPath: 'name',
            dataSource: [
              { Name: 'Iowa', Population: 29863010 },
              { Name: 'Utah', Population: 1263010 },
              { Name: 'Texas', Population: 963010 },
            ],
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'Name',
                template: '<div><div><img src="https://ej2.syncfusion.com/demos/src/maps/images/weather-clear.png" style="width:22px;height:22px"> </div> ${Name}</img></div>'
            }
        }
    ]
});
map.appendTo('#element');



