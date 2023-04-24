var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        markerSettings: [
        {
            visible: true,
            template: '<div id="marker4" class="markerTemplate">Europe' +
                '</div>',
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998 }
            ],
            animationDuration: 0,
        },
        {
            visible: true,
            template: '<div id="marker5" class="markerTemplate" style="width:50px">North America' +
                '</div>',
            dataSource: [
                { latitude: 59.88893689676585, longitude: -109.3359375 }
            ],
            animationDuration: 0
        },
        {
            visible: true,
            template: '<div id="marker6" class="markerTemplate" style="width:50px">South America' +
                '</div>',
            dataSource: [
                { latitude: -6.64607562172573, longitude: -55.54687499999999 }
            ],
            animationDuration: 0
        },
        ]
    }]
});
map.appendTo('#element');

