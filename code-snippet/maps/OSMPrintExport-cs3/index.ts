


import { Maps, Print, ImageExport, PdfExport} from '@syncfusion/ej2-maps';
Maps.Inject(Print, ImageExport, PdfExport);
    let maps: Maps = new Maps({
        allowPdfExport: true,
        allowImageExport: true,
        allowPrint: true,
        titleSettings: {
			text: 'OSM'
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



