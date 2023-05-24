var map = new ej.maps.Maps({
    layers: [{
         shapeData: world_map,
        markerSettings: [{
            visible: true,
            shapeValuePath:'shape',
            colorValuePath:'color',
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe', color:'red', shape:'Triangle' },
                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America',
                color:'blue', shape:'Pentagon' },
                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America',
                color:'green', shape:'InvertedTriangle' }
            ]
        }]
    }]
});
map.appendTo('#element');

