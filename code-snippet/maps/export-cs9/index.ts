


import { Maps, MapsTooltip, DataLabel, PdfExport} from '@syncfusion/ej2-maps';
import { usa_map } from '../default-map-cs1/usa.ts';
Maps.Inject(MapsTooltip, DataLabel, PdfExport);

    let maps: Maps = new Maps({
        allowPdfExport: true,
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
        maps.export('PDF', 'Maps', 0);
    };



