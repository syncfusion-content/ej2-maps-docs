var map = new ej.maps.Maps({
   layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: Population_Density,
        legendSettings:{
            visible: true
        },
        shapeSettings: {
            colorValuePath: 'density',
            colorMapping: [
                {
                    from: 0, to: 100, color: ['red','blue']
                },
                {
                    from: 101, to: 200, color: ['green','yellow']
                }
            ]
        }
    }]
});
map.appendTo('#element');

