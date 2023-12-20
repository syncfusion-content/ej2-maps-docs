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
document.getElementById('button').onclick = () => {
    mapBoundCoordinates = maps.getMinMaxLatitudeLongitude();
    const displayDiv = document.getElementById('coordinatesDisplay');
    displayDiv.innerHTML = '';
    if (mapBoundCoordinates) {
        for (const key in mapBoundCoordinates) {
            if (Object.hasOwnProperty.call(mapBoundCoordinates, key)) {
                const p = document.createElement('p');
                p.textContent = `${key}: ${mapBoundCoordinates[key]}`;
                displayDiv.appendChild(p);
            }
        }
    } else {
        displayDiv.textContent = 'No coordinates available';
    }
};
