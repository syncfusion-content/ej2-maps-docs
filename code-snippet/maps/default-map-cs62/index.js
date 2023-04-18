var map = new ej.maps.Maps({
    baseLayerIndex: 1,
    layers: [
        {
           shapeData: world_map,
        },
        {
           shapeData: usa_map
        }
   ]
});
map.appendTo('#element');

