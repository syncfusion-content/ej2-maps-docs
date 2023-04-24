var map = new ej.maps.Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                intersectionAction: 'Trim'
            }
        }
    ]
});
map.appendTo('#element');

