var map = new ej.maps.Maps({
    layers: [
        {
            shapeData: world_map,
            dataSource: [
                { "Country": "China", "Membership": "Permanent"},
                { "Country": "France", "Membership": "Permanent" },
                { "Country": "Russia", "Membership": "Permanent"},
                { "Country": "Kazakhstan", "Membership": "Non-Permanent"},
                { "Country": "Poland", "Membership": "Non-Permanent"},
                { "Country": "Sweden", "Membership": "Non-Permanent"}
            ],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            highlightSettings: {
               enable: true,
               fill: 'blue',
               border: { color: 'white', width: 2}
            },
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
        visible: true
    }
});
map.appendTo('#element');

