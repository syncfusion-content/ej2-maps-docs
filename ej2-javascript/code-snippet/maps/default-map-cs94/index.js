var maps = new ej.maps.Maps({
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"            
        },
        {
            shapeData: africa_continent,
            type: 'SubLayer',
            shapeSettings: {
                fill: "blue"
            }
        }
    ]
});
maps.appendTo('#element');


