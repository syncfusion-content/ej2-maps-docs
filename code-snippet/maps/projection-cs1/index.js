var maps = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        shapeDataPath: 'Country',
        shapePropertyPath: 'name',
        dataSource: projectionData,
        tooltipSettings: {
            visible: true,
            valuePath: 'Country'
        },
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                {
                    value: 'Permanent',
                    color: '#EDB46F'
                },
                {
                    color: '#F1931B',
                    value: 'Non-Permanent'
                }
            ],
            colorValuePath: 'Membership'
        }
    }]
});
maps.appendTo('#container');
document.getElementById('projectiontype').onchange = () => {
    maps.projectionType = document.getElementById('projectiontype').value;
    maps.refresh();
};

