var map = new ej.maps.Maps({
    annotations: [{
        content: '<div id="first"><h1>Maps</h1></div>',
        verticalAlignment: 'Center',
        horizontalAlignment: 'Center',
        x: '20%', y: '50%',
        zIndex: '-1'
    }],
    layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');