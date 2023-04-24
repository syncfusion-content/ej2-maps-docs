var map = new ej.maps.Maps({
    legendSettings: {
        visible: true,
        valuePath: 'continent',
        removeDuplicateLegend: true
    },
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'continent',
        shapePropertyPath: 'continent',
        dataSource: default_data,
        shapeSettings: {
            colorValuePath:'color'
        }
    }]
});
map.appendTo('#element');

