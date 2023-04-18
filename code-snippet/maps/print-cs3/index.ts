


import { Maps, MapsTooltip, DataLabel, Print} from '@syncfusion/ej2-maps';
import { usa_map } from '../default-map-cs1/usa.ts';
Maps.Inject(MapsTooltip, DataLabel, Print);
    let maps: Maps = new Maps({
        allowPrint: true,
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
    document.getElementById('print').onclick = () => {
        maps.print();
    };



