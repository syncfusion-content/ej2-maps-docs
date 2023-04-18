var maps = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true,
        }
    }] 
});
maps.appendTo('#container');
document.getElementById('theme').onchange = () => {
    var value = document.getElementById('theme').value;
    maps.theme= value; 
    maps.refresh();
}

