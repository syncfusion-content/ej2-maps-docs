var map = new ej.maps.Maps({
    legendSettings: {
        visible: true,
        type: 'Markers'
    },
    layers: [
        {
            shapeData: world_map,
            markerSettings: [
                {
                    visible: true,
                    legendText: 'name',
                    dataSource: [
                        { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno' },
                        { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel' },
                        { latitude: 40.7424509, longitude: -74.0081468, name: 'New York' }
                    ],
                    shape: 'Circle'
                }
			]
        }
    ]
});
map.appendTo('#element');

