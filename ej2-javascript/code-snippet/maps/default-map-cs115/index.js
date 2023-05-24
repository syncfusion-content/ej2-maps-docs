var map = new ej.maps.Maps({
    tooltipRender: function (args) {
        if (!args.options.data) {
            args.cancel = true;
        }
    },
    layers: [{
        shapeData: world_map,
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                { color: '#b3daff', value: '1' },
                { color: '#80c1ff', value: '2' },
                { color: '#1a90ff', value: '3' },
                { color: '#005cb3', value: '7' }
            ],
            colorValuePath: 'value1'
        },
        dataSource: [
            { "name": "India", "value1": "3", "value2": "2", "country": "India" },
            { "name": "Dominican Rep.", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Cuba", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Jamaica", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Haiti", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Guyana", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Suriname", "value1": "3", "value2": "2", "country": "West Indies"},
            { "name": "Trinidad and Tobago", "value1": "3", "value2": "2", "country": "West Indies" },
            { "name": "Sri Lanka", "value1": "3", "value2": "1", "country": "Sri Lanka" },
            { "name": "United Kingdom", "value1": "3", "value2": "0", "country": "England" },
            { "name": "Pakistan", "value1": "2", "value2": "1", "country": "Pakistan" },
            { "name": "New Zealand", "value1": "1", "value2": "0", "country": "New Zealand" },
            { "name": "Australia", "value1": "7", "value2": "5", "country": "Australia" }
        ],
        tooltipSettings: {
            visible: true,
            valuePath: 'name',
            format: '${name}: ${value1}',
            fill: '#D0D0D0',
            textStyle: {
                color: 'green',
                fontFamily: 'Times New Roman',
                fontStyle: 'Sans-serif'
            }
        }
    }]
});
map.appendTo('#element');

