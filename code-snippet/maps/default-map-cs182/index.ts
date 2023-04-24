


import { Maps, Legend } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
Maps.Inject(Legend);
let map: Maps = new Maps({
    titleSettings: {
        text: 'USA Election Results - 2016'
    },
    layers: [
        {
            shapeData: world_map,
            dataSource: [{  "Country": "China", "Membership": "Permanent"},
            {"Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            {"Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            {"Country": "Sweden","Membership": "Non-Permanent"}],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            shapeSettings: {
                colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]

            }
        }
    ],
    legendSettings: {
        visible: true,
        background: 'green',
        border: {
            color: 'blue',
            width: 2
        },
        fill: 'orange',
        labelPosition: 'Before',
        orientation: 'Vertical',
        textStyle: {
            size: '12px',
            color: 'red',
            fontStyle: 'italic'
        },
        title: {
            description: 'Legend title',
            text: 'Legend'
        },
        titleStyle: {
            size: '12px',
            color: '#d6e341',
            fontStyle: 'italic'
        }
    }
});

 map.appendTo('#element');


