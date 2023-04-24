ej.base.L10n.load({
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

var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true
    },
    locale: 'ar-AR',
    layers: [
        {
             shapeData: world_map
        }
    ]
});
map.appendTo('#container');

