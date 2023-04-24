var map = new ej.maps.Maps({
    legendSettings: {
    visible: true,
    type: 'Markers',
	useMarkerShape:true,
    toggleLegendSettings: {
      enable: true,
      applyShapeSettings: false,
      border: {
        color: 'green',
        width: 2
      }
    }
  },
  layers: [
    {
      shapeDataPath: 'name',
      shapePropertyPath: 'name',
      shapeData: world_map,
      shapeSettings: {
        fill: '#E5E5E5'
      },
      markerSettings: [
        {
          dataSource: markerDataSource,
          colorValuePath: 'color',
		  shapeValuePath:'shape',
          legendText: 'country',
          visible: true
        }
      ]
    }
  ]
});
map.appendTo('#element');

