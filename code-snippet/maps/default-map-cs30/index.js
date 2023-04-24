var map = new ej.maps.Maps({
    zoomSettings:{
        enable:false,
        zoomFactor:13
    },
    centerPosition: {
        latitude: 25.54244147012483,
        longitude: -89.62646484375
    },
    layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');

