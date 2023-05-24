var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            dataSource: [
                { name: 'India', population: '38332521' },
                { name: 'South Africa', population: '19651127' },
                { name: 'Pakistan', population: '3090416' }
            ],
            highlightSettings: {
                enable: true,
                fill: 'green',
                border: { color: 'white', width: 2}
            },
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');

