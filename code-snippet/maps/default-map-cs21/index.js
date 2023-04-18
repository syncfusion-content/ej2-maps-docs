var map = new ej.maps.Maps({
    mapsArea: {
        background: '#CCD1D1',
        border: {
            width: 2,
            color: 'green'
        }
    },
    layers: [{
        layerType: 'Geometry',
        shapeData: world_map,
        shapeSettings: {
            autofill: true,
        }
    }]
});

map.appendTo('#element');

