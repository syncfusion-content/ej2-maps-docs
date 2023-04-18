var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        toolbarSettings:{
            buttonSettings: {
               fill:'pink',
               padding: 10,
               toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
               color: 'red',
               borderColor:'green',
               radius:35,
               selectionColor:'#d55e5e',
               hightlightColor:'#5ed59a',
               opacity:0.6,
               borderWidth: 2
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

