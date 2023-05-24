var map = new ej.maps.Maps({
    layers: [
        {
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Hide',
                intersectionAction: 'Trim',
                border: {
                    color: 'green',
                    width: 2
                },
                fill: 'transparent',
                opacity: 0.9,
                textStyle: {
                    size: '17px',
                    fontStyle: 'Sans-serif',
                    fontWeight: 'normal'
                }
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        }
    ]
});
map.appendTo('#element');

