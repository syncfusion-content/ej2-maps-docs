var map = new ej.maps.Maps({
    layers: [{
        shapeData: usa_map,
        dataLabelSettings: {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Hide',
            intersectionAction: 'Trim',
            animationDuration: 2000,
        },
        shapeSettings: {
            autofill: true,
        },
        tooltipSettings: {
            visible: true,
            valuePath: 'name',
        },
    }]
});

map.appendTo('#element');

