var map = new ej.maps.Maps({
    legendSettings:{
        visible:true,
        showLegendPath:'visibility'
    },
    layers: [
        {
            shapeData: world_map,
            dataSource: default_data,            
            shapePropertyPath: 'continent',
            shapeDataPath: 'continent',
            shapeSettings: {
                colorValuePath: 'color'
            }            
        }
    ]
});
map.appendTo('#element');

