var map = new ej.maps.Maps({
    annotations: [{
        content: '<div id="first"><h1>Maps-Annotation</h1></div>',
        x: '50%', y: '0%',
        zIndex: '-1'
    },
    {
        content: '<div id="first"><h1>Maps</h1></div>',
        x: '20%', y: '50%',
        zIndex: '-1'
    }],
   layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');