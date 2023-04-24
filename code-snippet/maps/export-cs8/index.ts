


import { Maps, MapsTooltip, DataLabel, ImageExport} from '@syncfusion/ej2-maps';
import { usa_map } from '../default-map-cs1/usa.ts';
Maps.Inject(MapsTooltip, DataLabel, ImageExport);

    let maps: Maps = new Maps({
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
                },
            }
        ]
    });
    maps.appendTo('#element');
    document.getElementById('export').onclick = () => {
        maps.export('JPEG', 'Maps', null, false).then((data) => {
            document.getElementById('data').innerHTML = data;
        });
    };



