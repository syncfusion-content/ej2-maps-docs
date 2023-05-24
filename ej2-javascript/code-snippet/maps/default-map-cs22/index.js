var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true,
            palette: ['#33CCFF', '#FF0000', '#800000', '#FFFF00', '#808000'],
            border: {
                color: 'green',
                width: 2
            },
            dashArray: '1',
            opacity: 0.9
        }
    }]
});
map.appendTo('#element');

