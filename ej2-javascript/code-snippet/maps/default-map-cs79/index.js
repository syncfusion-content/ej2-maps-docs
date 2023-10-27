var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        markerSettings: [{
            visible: true,
            shape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/maps/images/ballon.png',
            height: 20,
            width: 20,
            dataSource: [
                { latitude: 37.0000, longitude: -120.0000, city: 'California' },
                { latitude: 40.7127, longitude: -74.0059, city: 'New York' },
                { latitude: 42, longitude: -93, city: 'Iowa' }
            ]
        }]
    }]
});
map.appendTo('#element');

