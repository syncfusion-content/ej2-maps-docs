var maps = new ej.maps.Maps({
    allowImageExport: true,
    layers: [
        {
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
            },
            shapeData: usa_map,
            shapeSettings: {
                autofill: true
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        }
    ]
    });
    maps.appendTo('#element');
    document.getElementById('export').onclick = () => {
        maps.export('JPEG', 'Maps', null, false).then((data) => {
           document.getElementById('data').innerHTML = data;
        });
    };

