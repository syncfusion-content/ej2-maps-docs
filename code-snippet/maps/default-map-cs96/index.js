var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        toolbarSettings:{
            orientation:'Vertical',
            backgroundColor:'pink',
            borderWidth:3,
            borderColor:'green',
            verticalAlignment:'Near',
            buttonSettings: {
               toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
            }
        }
    },
    layers: [
        {
            shapeData: world_map,
            shapeSettings: {
                fill: '#C1DFF5'
            }
        }
    ]
});
map.appendTo('#element');

