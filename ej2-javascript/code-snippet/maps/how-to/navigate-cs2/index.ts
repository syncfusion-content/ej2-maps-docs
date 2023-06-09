

import { Maps, ILoadEventArgs, Zoom } from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';
import { latLongPoints } from './latLongPoints.ts';

Maps.Inject(Zoom);

// initialize Maps component
let map: Maps = new Maps(
    {
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
        load: function (args: ILoadEventArgs) {
            let element: HTMLSelectElement = <HTMLSelectElement>document.getElementById("countriesCombo");
            for (let i: number = 0; i < latLongPoints.length; i++) {
                let item = latLongPoints[i];
                let selectBoxOption = document.createElement("option");
                selectBoxOption.value = item.name;
                selectBoxOption.text = item.name;
                element.add(selectBoxOption, null);
            }
        }
    }
);

// render initialized Map
map.appendTo('#container');

document.getElementById("countriesCombo").onchange = function () {
    let lat = latLongPoints[(<HTMLSelectElement>this).selectedIndex].latitude;
    let long = latLongPoints[(<HTMLSelectElement>this).selectedIndex].longitude;
    map.centerPosition.latitude = lat;
    map.centerPosition.longitude = long;
    map.zoomSettings.zoomFactor = 5;
    map.layers[0].animationDuration = 1000;
    map.refresh();
    let group = document.getElementById("container_LayerIndex_0_Polygon_Group");
    for (let j: number = 0; j < group.children.length; j ++) {
        if (group.children[j].getAttribute("aria-label") === (<HTMLSelectElement>this).value) {
            let element = group.children[j];
            element.setAttribute("fill", "red");
            break;
        }
    }
}


