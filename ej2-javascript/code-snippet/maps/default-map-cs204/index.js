var maps = new ej.maps.Maps({
    zoomSettings: {
        enable: true
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            fill: '#C1DFF5'
        },
        markerClusterSettings: {
            allowClustering: true,
            allowClusterExpand: true,
            shape: 'Circle',
            height: 40,
            width: 40,
            labelStyle : { color: 'white'},
            opacity: 0.9,
            fill: 'green',
            connectorLineSettings: {
                color: 'orange',
                opacity: 0.8,
                width: 2
            }
        },
        markerSettings: [{
            visible: true,
            dataSource: cluster,
            shape: 'Balloon',
            tooltipSettings: {
                format: 'City: ${city} <br> Area: ${area}',
                visible: true,
                valuePath: 'area',
            },
            height: 20,
            width: 20,
            animationDuration: 0
        }]
    }]
	});
    maps.appendTo('#container');

