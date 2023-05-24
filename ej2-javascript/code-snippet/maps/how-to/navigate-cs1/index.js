var maps = new ej.maps.Maps({
        zoomSettings: {
            enable: true,
            zoomOnClick: true
        },
        layers: [
            {
                animationDuration:1000,
                shapeData: world_map,
                dataSource: latLongPoints,
                shapePropertyPath: 'name',
                shapeDataPath: 'name',
                selectionSettings: {
                  enable: true,
                  fill: 'red'
                },
                shapeSettings: {
                    autofill: true,
                    palette: ['#4A3825', '#736F3D', '#F2DABD', '#BF9D7E', '#7F6039', '#7F715F', '#70845D', '#CC995C', '#736F3D', '#89541B']
                },
            }
        ],
        load: function (args) {
            var element = document.getElementById("countriesCombo");
            for (var i = 0; i < latLongPoints.length; i++) {
                var item = latLongPoints[i];
                var selectBoxOption = document.createElement("option");
                var value = item.name;
                selectBoxOption.text = item.name;
                element.add(selectBoxOption, null);
            }
        }
    });
    maps.appendTo('#container');
    document.getElementById("countriesCombo").onchange = function () {
    var lat = latLongPoints[this.selectedIndex].latitude;
    var long = latLongPoints[this.selectedIndex].longitude;
    maps.centerPosition.latitude = lat;
    maps.centerPosition.longitude = long;
    maps.zoomSettings.zoomFactor = 5;
    maps.layers[0].animationDuration = 1000;
    maps.refresh();
    var group = document.getElementById("container_LayerIndex_0_Polygon_Group");
    for (var j = 0; j < group.children.length; j ++) {
        if (group.children[j].getAttribute("aria-label") === this.value) {
            var element = group.children[j];
            element.setAttribute("fill", "red");
            break;
        }
    }
}

