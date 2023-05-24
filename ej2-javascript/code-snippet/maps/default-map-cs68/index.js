var map = new ej.maps.Maps({
    legendSettings:{
        visible: true,
    },
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: Population_Density,
        shapeSettings: {
            colorValuePath: 'density',
            colorMapping: [
                {
                    from: 0, to: 100, color: 'rgb(153,174,214)', showLegend: true
                },
                {
                    from: 101, to: 200, color: 'rgb(115,143,199)', showLegend: false
                },
                {
                    color: 'rgb(77,112,184)', showLegend: false
                }
            ]
        }
    }]
});
map.appendTo('#element');

