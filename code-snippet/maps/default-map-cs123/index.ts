


import { Maps, Zoom } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { L10n } from '@syncfusion/ej2-base';
Maps.Inject(Zoom);

L10n.load({
    'ar-AR': {
        'maps': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين'
        },
    }
});

let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        toolbars: ['ZoomIn', 'ZoomOut', 'Zoom', 'Pan', 'Reset' ]
    },
    locale: 'ar-AR',
    layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');



