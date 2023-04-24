var map = new ej.maps.Maps({
    height: '200px',
    width: '500px',
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true,
        }
    }]
});

map.appendTo('#element');

