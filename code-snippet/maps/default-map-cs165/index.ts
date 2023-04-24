


import { world_map } from './world-map.ts';
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        dataLabelSettings: {
            visible: true,
            labelPath: "continent",
            smartLabelMode: 'Trim'
        },
        dataSource: [
            { "name": "Afghanistan", "value": 53, "countryCode": "AF", "population": "29863010", "color": "red", "density": "119", "continent": "Asia" },
            { "name": "Albania", "value": 117, "countryCode": "AL", "population": "3195000", "color": "Blue", "density": "111", "continent": "Europe" },
            { "name": "Algeria", "value": 15, "countryCode": "DZ", "population": "34895000", "color": "Green", "density": "15", "continent": "Africa" }
        ],
        shapeSettings: {
                autofill: true
        }
    }]
});
map.appendTo('#element');



