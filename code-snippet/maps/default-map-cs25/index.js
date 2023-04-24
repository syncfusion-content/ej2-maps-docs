var map = new ej.maps.Maps({
    annotations:[
        {
            content:'#maps-annotation', // To insert the text content
            x: '0%', y: '70%'
        },
        {
            content: '#compass-maps',  // To insert the image
            x: '80%', y: '5%'
        }
    ],
   layers: [
        {
            shapeData: africa_continent,
            shapeSettings: {
                fill: 'url(#grad1)'
            }
        }
    ],
});
map.appendTo('#element');

