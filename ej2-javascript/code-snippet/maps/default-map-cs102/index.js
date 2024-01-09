var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        initialShapeSelection: [
            { shapePath: 'continent', shapeValue: 'Africa' },
            { shapePath: 'name', shapeValue: 'India' }
        ],
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        }
    }]
});
map.appendTo('#element');