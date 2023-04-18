var map = new ej.maps.Maps({
   tooltipRender(args) {
        if (!args.options['data']) {
            args.cancel = true;
        }
    },
    legendSettings: {
        visible: true,
        mode: 'Interactive',
        position: 'Left',
        orientation: 'Vertical',
        height: '70%',
        width: '10'
    },
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        dataSource: tooltipData,
        tooltipSettings: {
            visible: true,
            valuePath: 'name',
            template: '#template'
        },
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                { color: '#b3daff', value: '1' },
                { color: '#80c1ff', value: '2' },
                { color: '#1a90ff', value: '3' },
                { color: '#005cb3', value: '7' }
            ],
            colorValuePath: 'value1'
        }
    }]
});
map.appendTo('#element');


