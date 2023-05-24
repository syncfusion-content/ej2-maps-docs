var map = new ej.maps.Maps({
    background: '#CCD1D1',
    border: {
        color: 'green',
        width: 2
    },
    margin: {
        bottom: 10,
        left: 20,
        right: 20,
        top: 10
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true
        }
    }]
});

map.appendTo('#element');

