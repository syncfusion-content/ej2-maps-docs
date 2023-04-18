var map = new ej.maps.Maps({
     layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            minRadius: 5,
            dataSource: [
                { name: 'India', population: '38332521' },
                { name: 'New Zealand', population: '19651127' },
                { name: 'Pakistan', population: '3090416' }
            ],
            fill: 'green',
            animationDelay: 100,
            animationDuration: 1000,
            maxRadius: 80,
            border: {
                color: 'blue',
                width: 2
            },
            opacity: 1,
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');

