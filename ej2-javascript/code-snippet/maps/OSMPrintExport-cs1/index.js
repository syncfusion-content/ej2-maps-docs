 var maps = new ej.maps.Maps({
     allowImageExport: true,
     allowPdfExport: true,
     allowPrint: true,
       titleSettings:{
			text:'OSM'
		},
        layers: [
            {
                urlTemplate:"https://tile.openstreetmap.org/level/tileX/tileY.png"
            }
        ]
    });
    maps.appendTo('#container');
    document.getElementById('export').onclick = () => {
        maps.export('PNG', 'Maps');
    };
    document.getElementById('print').onclick = () => {
        maps.print();
    };

