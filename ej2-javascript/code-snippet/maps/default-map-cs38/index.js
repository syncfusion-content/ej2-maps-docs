var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            minRadius: 20,
            colorValuePath: 'color',
            dataSource: [
                { name: 'India', population: '38332521', color: 'blue' },
                { name: 'New Zealand', population: '19651127', color: '#c2d2d6'  },
                { name: 'Pakistan', population: '3090416', color: '#09156d'  }
            ],
            maxRadius: 40,
            valuePath: 'population'
        }]
    }]
});
map.appendTo('#element');

