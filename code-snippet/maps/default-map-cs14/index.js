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
                     from: 0, to: 100, color: 'red', minOpacity:0.2, maxOpacity:1
                 },
                 {
                     from: 101, to: 200, color: 'blue', minOpacity:0.3, maxOpacity:1
                 }
             ]
         }
     }]
 });
 map.appendTo('#element');