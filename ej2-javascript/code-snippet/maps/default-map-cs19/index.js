var map = new ej.maps.Maps({
    titleSettings: {
        text: 'Maps Control',
        textStyle: {
            color: 'red',
            fontStyle: 'italic',
            fontWeight: 'regular',
            fontFamily: 'arial',
            size: '14px'
        },
        alignment: 'Center'
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true
        }
    }]
});

map.appendTo('#element');

