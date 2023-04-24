---
layout: post
title: Azure maps in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Azure maps in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Azure maps 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Azure maps in ##Platform_Name## Maps control

Azure Maps is yet another online Maps provider, owned by Microsoft. As like OSM and Bing Maps, it provides Maps tile images based on our requests and combines those images into a single one to display Maps area.

## Adding Azure Maps

The Azure Maps can be rendered using the [urlTemplate](../../api/maps/layerSettingsModel/#urltemplate) property with the tile server URL provided by online map providers. In the meantime, a subscription key is required for Azure Maps. Follow the steps in this [link](https://docs.microsoft.com/en-us/azure/search/search-security-api-keys) to generate an API key, and then added the key to the URL.

>Refer to [Azure Maps Licensing](https://azure.microsoft.com/en-in/support/legal/).

```javascript
var map = new ej.maps.Maps({
    layers: [{
        urlTemplate: "https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY"
    }]
});
map.appendTo('container');
```

## Enabling zooming and panning

The Azure Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a map for in-depth analysis. Panning helps to move a map around to focus the targeted area.

```javascript
var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
    },
    layers: [{
        urlTemplate: "https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY"
    }]
});
map.appendTo('container');
```

## Adding markers and navigation line

Markers can be added to the layers of Azure Maps by setting the corresponding location's coordinates of latitude and longitude using [markerSettings](../../api/maps/layerSettingsModel/#markersettings). Navigation lines can be added on top of the Azure Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [navigationLineSettings](../../api/maps/layerSettingsModel/#navigationlinesettings).

```javascript
var map = new ej.maps.Maps({
    zoomSettings: {
    zoomFactor: 4,
  },
  centerPosition: {
    latitude: 29.394708,
    longitude: -94.954653,
  },
  layers: [
    {
      urlTemplate: 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY',
      markerSettings: [
        {
          visible: true,
          height: 25,
          width: 15,
          dataSource: [
            {
              latitude: 34.06062,
              longitude: -118.330491,
              name: 'California',
            },
            {
              latitude: 40.724546,
              longitude: -73.850344,
              name: 'New York',
            },
          ],
        },
      ],
      navigationLineSettings: [
        {
          visible: true,
          color: 'blue',
          width: 5,
          angle: 0.1,
          latitude: [34.06062, 40.724546],
          longitude: [-118.330491, -73.850344],
        },
      ],
    },
  ],
});
map.appendTo('container');
```

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the Azure Maps layer for highlighting a particular continent or country in Azure Maps by adding another layer and specifying the [type](../../api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

```javascript

var map = new ej.maps.Maps({
    layers: [
        {
           urlTemplate: "https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY"
        },
        {
            shapeData: Africa_Continent,
            type: 'SubLayer',
            shapeSettings: {
                fill: "blue"
            }
        }
    ]
});
map.appendTo('container');

```

## Enabling legend

The legend can be added to the Azure Maps by setting the [visible](../../api/maps/legendSettingsModel/#visible) property of [legendSettings](../../api/maps/legendSettingsModel) to **true**.

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
          urlTemplate: "https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY",
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