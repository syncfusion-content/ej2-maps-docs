var map = new ej.maps.Maps({
    shapeSelected: function(args) {
        var shape =(args.shapeData).continent;
        if (shape === 'Africa') {
            map.baseLayerIndex = 1;
            map.refresh();
        }
    },
        layers: [
        {
            layerType: 'Geometry',
            shapeData: world_map,
            shapePropertyPath: 'continent',
            shapeDataPath: 'continent',
            dataSource:default_data,
            shapeSettings: {
                colorValuePath: 'drillColor'
            },
            markerSettings: [{
                visible: true,
                template: '<div id="marker3" class="markerTemplate">Africa' +
                    '</div>',
                dataSource: [
                    { latitude: 10.97274101999902, longitude: 16.390625 }
                ],
                animationDuration: 0
            }
        ]
        },
        {
            layerType: 'Geometry',
            shapeData: africa,
            shapeSettings: {
                fill: '#80306A'
            },
            highlightSettings: {
                enable: true,
                fill: '#80306A'
            }
        }
    ]
});
map.appendTo('#element');

