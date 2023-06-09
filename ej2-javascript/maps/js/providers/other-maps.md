---
layout: post
title: Other maps in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Other maps in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Other maps 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Other maps in ##Platform_Name## Maps control

Apart from OpenStreetMap and Bing Maps, you can also render Maps from other online map service providers by specifying the URL provided by those providers in the [urlTemplate](../../api/maps/layerSettingsModel/#urltemplate) property. The URL template concept has been implemented in such a way that any online map service providers using the following template can benefit from previewing their Map in the Syncfusion EJ2 Maps control.

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.png

* "${z}" - It represents zoom factor (level).
* "${x}" - It indicates tile image x-position (tileX).
* "${y}" - It indicates tile image y-position (tileY).

In this case, the key generated for those online map service providers can also be appended to the URL. This allows to create personalized Maps with your own content and imagery.

Following is an example of how to add a TomTom map. You can generate an API key by following the steps in this [link](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction) and then adding the key to the URL.

```javascript
var map = new ej.maps.Maps({
    layers: [{
        urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
    }]
});
map.appendTo('container');
```

![TomTom Maps](../../maps/images/MapProviders/tomtom-maps.PNG)

## Enabling zooming and panning

Tile Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a map for in-depth analysis. Panning helps to move a map around to focus the targeted area.

```javascript
var maps = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
    },
    layers: [
        {
            urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
        }
    ]
});
maps.appendTo('#element');
```

![TomTom Maps with Zooming and Panning](../../maps/images/MapProviders/tomtom-maps-zooming.PNG)

## Adding markers and navigation line

Markers can be added to the layers of tile Maps by setting the corresponding location's coordinates of latitude and longitude using [markerSettings](../../api/maps/layerSettingsModel/#markersettings). Navigation lines can be added on top of an tile Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [navigationLineSettings](../../api/maps/layerSettingsModel/#navigationlinesettings).

```javascript
var maps = new ej.maps.Maps({
    zoomSettings: {
        zoomFactor: 4
    },
    centerPosition: {
        latitude: 29.394708,
        longitude: -94.954653
    },
    layers: [
        {
            urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key",
            markerSettings: [{
                visible: true,
                height: 25,
                width: 15,
                dataSource: [{
                    latitude: 34.060620,
                    longitude: -118.330491,
                    name: "California"
                },
                {
                    latitude: 40.724546,
                    longitude: -73.850344,
                    name: "New York"
                }]
            }],
            navigationLineSettings: [{
                visible: true,
                color: "blue",
                width: 5,
                angle: 0.1,
                latitude: [34.060620, 40.724546],
                longitude: [-118.330491,-73.850344]
            }]
        }
    ]
});
maps.appendTo('#element');
```

![TomTom Maps with Markers and Navigation Line](../../maps/images/MapProviders/tomtom-maps-marker-and-line.PNG)

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the tile Maps layer for highlighting a particular continent or country in tile Maps by adding another layer and specifying the [type](../../api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

```javascript
var maps = new ej.maps.Maps({
    layers: [
        {
            urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
        },
        {
            shapeData: africa_continent,
            type: "SubLayer",
            shapeSettings: {
                fill: "blue"
            }
        }
    ]
});
maps.appendTo('#element');
```

![TomTom Maps with Sublayer](../../maps/images/MapProviders/tomtom-map-sublayer.PNG)

## Enabling legend

The legend can be added to the tile Maps by setting the [visible](../../api/maps/legendSettingsModel/#visible) property of [legendSettings](../../api/maps/legendSettingsModel) to **true**.

```javascript

var map = new ej.maps.Maps({
    legendSettings: {
        visible: true,
        type: 'Markers',
        useMarkerShape:true,
        toggleLegendSettings: {
          enable: true,
          applyShapeSettings: false,
          border: {
            color: 'green',
            width: 2
          }
        }
    },
    layers: [
        {
          urlTemplate:'http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key',
          shapeDataPath: 'name',
          shapePropertyPath: 'name',
          shapeSettings: {
            fill: '#E5E5E5'
          },
          markerSettings: [
            {
              dataSource: markerDataSource,
              colorValuePath: 'color',
              shapeValuePath:'shape',
              legendText: 'country',
              visible: true
            }
          ]
        }
    ]
});
map.appendTo('#element');

```

![TomTom Maps with Legend](../../maps/images/MapProviders/tomtom-map-legend.PNG)
