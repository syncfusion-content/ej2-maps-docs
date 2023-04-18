var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        tooltipSettings: {
            visible: true,
            valuePath: 'name'
        }
    }]
});
map.appendTo('#element');

