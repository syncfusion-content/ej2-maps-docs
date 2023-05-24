var maps = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        toolBars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
    },
    layers: [
        {
            urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
        }
    ]
});
maps.appendTo('#element');


