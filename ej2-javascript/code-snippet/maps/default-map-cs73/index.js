var map = new ej.maps.Maps({
    legendSettings: {
        visible: true,
        type: 'Bubbles'
    },
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            minRadius: 20,
            dataSource: [
                { color: 'green', name: 'India', population: '38332521' },
                { color: 'purple', name: 'Burundi', population: '10524117' },
                { color: 'blue', name: 'Pakistan', population: '3090416' }
            ],
            maxRadius: 40,
            colorValuePath: 'color',
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');

