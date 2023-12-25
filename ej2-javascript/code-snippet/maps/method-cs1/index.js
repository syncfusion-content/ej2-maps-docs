var maps = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        zoomFactor: 7
    },
    centerPosition: {
        latitude: 21.815447,
        longitude: 80.1932
    },
    layers: [
        {
            shapeData: world_map,
            markerSettings: [
                {
                    visible: true,
                    height: 25,
                    width: 25,
                    shape: 'Circle',
                    animationDuration: 1500,
                    dataSource: [
                        {
                            latitude: 22.572646,
                            longitude: 88.363895
                        },
                        {
                            latitude: 25.0700428,
                            longitude: 67.2847875
                        }
                    ]
                }
            ]
        }
    ]
});
maps.appendTo('#element');

function formatKey(key) {
    if (key === 'minLatitude') {
        return 'Minimum Latitude';
    } else if (key === 'maxLatitude') {
        return 'Maximum Latitude';
    } else if (key === 'minLongitude') {
        return 'Minimum Longitude';
    } else if (key === 'maxLongitude') {
        return 'Maximum Longitude';
    }
}

document.getElementById('button').onclick = () => {
    var mapBoundCoordinates;
    mapBoundCoordinates = maps.getMinMaxLatitudeLongitude();
    const displayDiv = document.getElementById('coordinatesDisplay');
    displayDiv.innerHTML = '';
    if (mapBoundCoordinates) {
        for (const key in mapBoundCoordinates) {
            if (Object.hasOwnProperty.call(mapBoundCoordinates, key)) {
                const p = document.createElement('p');
                const formattedKey = formatKey(key);
                p.textContent = `${formattedKey}: ${mapBoundCoordinates[key]}`;
                displayDiv.appendChild(p);
            }
        }
    } else {
        displayDiv.textContent = 'No coordinates available';
    }
};
