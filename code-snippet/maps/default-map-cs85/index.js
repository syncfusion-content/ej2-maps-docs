var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        horizontalAlignment:'Near',
        shouldZoomInitially: true
    },
    layers: [{
        shapeData: world_map,
        markerSettings: [{
            visible: true,
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America' },
                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
            ]
        }],
    }]
});
map.appendTo('#element');

