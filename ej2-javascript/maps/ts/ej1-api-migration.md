---
layout: post
title: Ej1 api migration in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Maps control

This article describes the API migration process of Maps component from Essential JS 1 to Essential JS 2.

## Size Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Height| Not Applicable |**Property:** *height*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; height : '300px' <br/> }); <br/> maps.appendTo('#container');|
|Width| Not Applicable |**Property:** *width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; width : '600px' <br/> }); <br/> maps.appendTo('#container');|

## Title and Subtitle Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Title text| Not Applicable |**Property:** *titleSettings.text*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; titleSettings:{ text : 'Members of the UN Security Council' } <br/> }); <br/> maps.appendTo('#container')|
|Subtitle text| Not Applicable |**Property:** *titleSettings.subtitleSettings.text*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; titleSettings:{ subtitleSettings:{ text : 'In 2017' } } <br/> }); <br/> maps.appendTo('#container');|
|Title alignment| Not Applicable |**Property:** *titleSettings.alignment*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; titleSettings:{ alignment : 'Center' } <br/> }); <br/> maps.appendTo('#container');|
|Subtitle alignment| Not Applicable |**Property:** *titleSettings.subtitleSettings.alignment*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; titleSettings:{ subtitleSettings:{ alignment : 'Center' } } <br/> }); <br/> maps.appendTo('#container');|

<!-- markdownlint-disable MD034 -->

## Layer Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Type | Not Applicable | **Property:** *layers.type*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ type:'Layer' }] <br/> }); <br/> maps.appendTo('#container')|
| Layer type | **Property:** *layers.layerType*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ layerType:'geometry' }] <br/> }); | **Property:** *layers.layerType*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ layerType:'Geometry' }] <br/> }); <br/> maps.appendTo('#container')|
| Visible | Not Applicable | **Property:** *layers.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ visible:true }] <br/> }); <br/> maps.appendTo('#container')|
| Bing map type | **Property:** *layers.bingMapType*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bingMapType:'aerial' }] <br/> }); | **Property:** *layers.bingMapType*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bingMapType:'Aerial' }] <br/> }); <br/> maps.appendTo('#container')|
| Bing Map key | **Property:** *layers.key*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ key:'' }] <br/> }); | **Property:** *layers.key*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ key:'' }] <br/> }); <br/> maps.appendTo('#container')|
| URL template | **Property:** *layers.urltemplate*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ urltemplate:'http://a.tile.openstreetmap.org/level/tileX/tileY.png' }] <br/> }); | **Property:** *layers.urlTemplate*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ urlTemplate:'http://a.tile.openstreetmap.org/level/tileX/tileY.png' <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Shape data | **Property:** *layers.shapeData*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeData:'WorldMap' }] <br/> }); | **Property:** *layers.shapeData*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeData:'WorldMap' }] <br/> }); <br/> maps.appendTo('#container')|
| Data source | **Property:** *layers.dataSource*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ dataSource:'PopulationData' }] <br/> }); | **Property:** *layers.dataSource*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ dataSource: PopulationData }] <br/> }); <br/> maps.appendTo('#container')|
| Query | Not Applicable | **Property:** *layers.query*<br/><br/> let data: DataManager = new DataManager({ url: '' }); <br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ query: new Query() }] <br/> }); <br/> maps.appendTo('#container')|
| Shape data path | **Property:** *layers.shapeDataPath*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeDataPath:'Continent' }] <br/> });  | **Property:** *layers.shapeDataPath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeDataPath:'Continent' }] <br/> }); <br/> maps.appendTo('#container')|
| Shape property path | **Property:** *layers.shapePropertyPath*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapePropertyPath:'Continent' }] <br/> });  | **Property:** *layers.shapePropertyPath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapePropertyPath:'Continent' }] <br/> }); <br/> maps.appendTo('#container')|
| Layer animation | Not Applicable | **Property:** *layers.animationDuration*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ animationDuration: 100 }] <br/> }); <br/> maps.appendTo('#container')|

## Shape Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Shape fill | **Property:** *layers.shapeSettings.fill*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeSettings:{ fill:'#626171' } }] <br/> }); | **Property:** *layers.shapeSettings.fill*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeSettings:{ fill: '#626171' } }] <br/> }); <br/> maps.appendTo('#container')|
| Shape palette | **Property:** *layers.shapeSettings.colorPalette*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeSettings:{ colorPalette:'customPalette' } }] <br/> }); | **Property:** *layers.shapeSettings.palette*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeSettings:{ palette: ['red','green'] } }] <br/> }); <br/> maps.appendTo('#container')|
| Shape point radius | Not Applicable | **Property:** *layers.shapeSettings.circleRadius*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeSettings:{ circleRadius: 10 } }] <br/> }); <br/> maps.appendTo('#container')|
| Shape color value path | **Property:** *layers.shapeSettings.colorValuePath*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeSettings:{ colorValuePath:'Country' } }] <br/> }); | **Property:** *layers.shapeSettings.colorValuePath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeSettings:{ colorValuePath:'Country'  } }] <br/> }); <br/> maps.appendTo('#container')|
| Shape value path | **Property:** *layers.shapeSettings.valuePath*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeSettings:{ valuePath:'population' } }] <br/> }); | **Property:** *layers.shapeSettings.valuePath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeSettings:{ valuePath:'population' } }] <br/> }); <br/> maps.appendTo('#container')|
| Shape dash array | Not Applicable | **Property:** *layers.shapeSettings.dashArray*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeSettings:{ dashArray:'1,2' } }] <br/> }); <br/> maps.appendTo('#container')|
| Shape opacity | Not Applicable | **Property:** *layers.shapeSettings.opacity*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ shapeSettings:{ opacity: 0.5 } }] <br/> }); <br/> maps.appendTo('#container')|
| Range color mapping | **Property:** *layers.shapeSettings.colorMappings.rangeColorMapping*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeSettings:{ colorMappings:{ rangeColorMapping:[{ from:'10', to:'40', color: "#D84444" }] } } }] <br/> })  | **Property:** *layers.shapeSettings.colorMapping*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; shapeSettings:{ colorMapping:[{ from:10, to: 30, color: "#D84444" }] } <br/> &nbsp;}] <br/> }); <br/> maps.appendTo('#container')|
| Equal color mapping | **Property:** *layers.shapeSettings.colorMappings.equalColorMapping*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ shapeSettings:{ colorMappings:{ equalColorMapping:[{ { value: "Romney", color: "#D84444" } }] } } }] <br/> })  | **Property:** *layers.shapeSettings.colorMapping*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; shapeSettings:{  colorMapping: [{ value: 'Romney', color: '#D84444' }] } <br/> &nbsp;}] <br/> }); <br/> maps.appendTo('#container')|

## Marker Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Marker data source | **Property:** *layers.markers*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ markers:[{ "Name": "USA", "latitude": 38.8833, "longitude": -77.0167 }] }] <br/> })  | **Property:** *layers.markerSettings.dataSource*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp;markerSettings:[{ <br/> &nbsp; &nbsp; &nbsp; dataSource: [{ "Name": "USA", "latitude": 38.8833, "longitude": -77.0167 }] <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Marker template | **Property:** *layers.markerTemplate*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ markerTemplate:"Template" }] <br/> })  | **Property:** *layers.markerSettings.template*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ template:'#Template' }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker visible | Not Applicable | **Property:** *layers.markerSettings.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ visible:true }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker fill | Not Applicable | **Property:** *layers.markerSettings.fill*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ fill:'#FF471A' }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker height | Not Applicable | **Property:** *layers.markerSettings.height*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ height:20 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker width | Not Applicable | **Property:** *layers.markerSettings.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ width:20 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker shape | Not Applicable | **Property:** *layers.markerSettings.shape*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ shape:'Balloon' }] }] <br/> }); <br/> maps.appendTo('#container')|
| ImageURL of marker | Not Applicable | **Property:** *layers.markerSettings.imageUrl*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; markerSettings:[{ <br/> &nbsp; &nbsp; &nbsp; imageUrl:'https://ej2.syncfusion.com/home/' <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Marker opacity | Not Applicable | **Property:** *layers.markerSettings.opacity*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ opacity:0.5 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker legend text | Not Applicable | **Property:** *layers.markerSettings.legendText*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ legendText:'China' }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker offset | Not Applicable | **Property:** *layers.markerSettings.offset*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ offset:new Point(20, 20) }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker animation duration | Not Applicable | **Property:** *layers.markerSettings.animationDuration*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ animationDuration:2000 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker animation delay | Not Applicable | **Property:** *layers.markerSettings.animationDelay*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ animationDelay:100 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker dash array | Not Applicable | **Property:** *layers.markerSettings.dashArray*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ markerSettings:[{ dashArray:'2,3' }] }] <br/> }); <br/> maps.appendTo('#container')|
| Marker selection | Not Applicable | **Property:** *layers.markerSettings.selectionSettings*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; markerSettings:[{ <br/> &nbsp; &nbsp; &nbsp;selectionSettings : { enable:true,fill:'#D2691E',opacity:1,enableMultiSelect:false } <br/> &nbsp; &nbsp;}] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Marker highlight | Not Applicable | **Property:** *layers.markerSettings.highlightSettings*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; markerSettings:[{ <br/> &nbsp; &nbsp; &nbsp;highlightSettings : { enable:true,fill:'#D2691E',opacity:1 } <br/> &nbsp; &nbsp; }] <br/>  &nbsp; }] <br/> &nbsp; }); <br/> maps.appendTo('#container')|
| Marker tooltip | Not Applicable | **Property:** *layers.markerSettings.tooltipSettings*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; markerSettings:[{ <br/> &nbsp; &nbsp; &nbsp;tooltipSettings : { visible:true,fill:'#363F4C',template:'#TooltipTemplate', valuePath:'State', format:'${State}${District}' } <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|

## Bubble Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Visible | **Property:** *layers.bubbleSettings.visible*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { showBubble:true }  }] <br/> })   | **Property:** *layers.bubbleSettings.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ visible:true }] }] <br/> }); <br/> maps.appendTo('#container')|
| Value path | **Property:** *layers.bubbleSettings.valuePath*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { valuePath:'Population' }  }] <br/> })   | **Property:** *layers.bubbleSettings.valuePath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ valuePath:'Population'}] }] <br/> }); <br/> maps.appendTo('#container')|
| Minimum value | **Property:** *layers.bubbleSettings.minValue*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { minValue:20 }  }] <br/> })   | **Property:** *layers.bubbleSettings.minRadius*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ minRadius:10 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Maximum value | **Property:** *layers.bubbleSettings.maxValue*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { maxValue:30 }  }] <br/> })   | **Property:** *layers.bubbleSettings.maxRadius*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ maxRadius:20 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Bubble type | Not Applicable | **Property:** *layers.bubbleSettings.bubbleType*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ bubbleType:'Circle' }] }] <br/> }); <br/> maps.appendTo('#container')|
| Color | **Property:** *layers.bubbleSettings.color*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { color:'green' }  }] <br/> }) | **Property:** *layers.bubbleSettings.fill*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ fill:'red' }] }] <br/> }); <br/> maps.appendTo('#container')|
| Opacity | **Property:** *layers.bubbleSettings.bubbleOpacity*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { bubbleOpacity:0.5 }  }] <br/> }) | **Property:** *layers.bubbleSettings.opacity*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ opacity:0.5 }] }] <br/> }); <br/> maps.appendTo('#container')|
| Color value path | **Property:** *layers.bubbleSettings.colorValuePath*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { colorValuePath:'Population' }  }] <br/> }) | **Property:** *layers.bubbleSettings.colorValuePath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ bubbleSettings:[{ colorValuePath:'Population' }] }] <br/> }); <br/> maps.appendTo('#container')|
| Enable tooltip | **Property:** *layers.bubbleSettings.showTooltip*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: { showTooltip:true }  }] <br/> }) | **Property:** *layers.bubbleSettings.tooltipSettings.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; bubbleSettings:[{ <br/> &nbsp; &nbsp; &nbsp;tooltipSettings : { visible:true } <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Tooltip template | **Property:** *layers.bubbleSettings.tooltipTemplate*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings: [{ tooltipTemplate:'Template' }]  }] <br/> }) | **Property:** *layers.bubbleSettings.tooltipSettings.template*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; bubbleSettings:[{ <br/> &nbsp; &nbsp; &nbsp; tooltipSettings : { template:'#TooltipTemplate' } <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Bubble selection | Not Applicable | **Property:** *layers.bubbleSettings.selectionSettings*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; bubbleSettings:[{ <br/> &nbsp; &nbsp; &nbsp;selectionSettings : { enable:true,fill:'#D2691E',opacity:1,enableMultiSelect:false } <br/> &nbsp; &nbsp;}] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Bubble highlight | Not Applicable | **Property:** *layers.bubbleSettings.highlightSettings*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; bubbleSettings:[{ <br/> &nbsp; &nbsp; &nbsp;highlightSettings : { enable:true,fill:'#D2691E',opacity:1 } <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Range color mapping | **Property:** *layers.bubbleSettings.colorMappings.rangeColorMapping*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings:{ colorMappings:{ rangeColorMapping:[{ from:'10', to:'40', color: "#D84444" }] } } }] <br/> })  | **Property:** *layers.bubbleSettings.colorMapping*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; bubbleSettings:[{ <br/> &nbsp; &nbsp; &nbsp;colorMapping:[{ from:10, to: 30, color: "#D84444" }] <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Equal color mapping | **Property:** *layers.bubbleSettings.colorMappings.equalColorMapping*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ bubbleSettings:{ colorMappings:{ equalColorMapping:[{ { value: "Romney", color: "#D84444" } }] } } }] <br/> })  | **Property:** *layers.bubbleSettings.colorMapping*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; bubbleSettings:[{ <br/> &nbsp; &nbsp; &nbsp;colorMapping: [{ value: 'Romney', color: '#D84444' }] <br/> &nbsp; &nbsp; }] <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|

## DataLabel Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Visible | **Property:** *layers.labelSettings.showLabels*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ labelSettings: { showLabels:true }  }] <br/> }) | **Property:** *layers.dataLabelSettings.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ dataLabelSettings:{ visible:true }  }] <br/> }); <br/> maps.appendTo('#container')|
| Label path | **Property:** *layers.labelSettings.labelPath*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ labelSettings: { labelPath:'Continent' }  }] <br/> }) | **Property:** *layers.dataLabelSettings.labelPath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ dataLabelSettings:{ labelPath:'Continent'} }] <br/> }); <br/> maps.appendTo('#container')|
| Enable smart label | **Property:** *layers.labelSettings.enableSmartLabel*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ labelSettings: { enableSmartLabel:true }  }] <br/> }) | Not Applicable |
| Smart label size | **Property:** *layers.labelSettings.smartLabelSize*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ labelSettings: { smartLabelSize:20 }  }] <br/> }) | Not Applicable |
| Label length | **Property:** *layers.labelSettings.labelLength*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ labelSettings: { labelLength:20 }  }] <br/> }) | Not Applicable |
| Opacity | Not Applicable | **Property:** *layers.dataLabelSettings.opacity*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ dataLabelSettings:{ opacity:0.5  }] <br/> }); <br/> maps.appendTo('#container')|
| Smart label mode | Not Applicable | **Property:** *layers.dataLabelSettings.smartLabelMode*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ dataLabelSettings:{ smartLabelMode:'Trim' } }] <br/> }); <br/> maps.appendTo('#container')|
| Intersection action | Not Applicable | **Property:** *layers.dataLabelSettings.intersectionAction*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ dataLabelSettings:{ intersectionAction:'Trim' } }] <br/> }); <br/> maps.appendTo('#container')|
| Template | Not Applicable | **Property:** *layers.dataLabelSettings.template*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ dataLabelSettings:{ template:'#LabelTemplate'} }] <br/> }); <br/> maps.appendTo('#container')|

## Legend Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Visible | **Property:** *layers.legendSettings.showLegend*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { showLegend:true }  }] <br/> }) | **Property:** *legendSettings.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { visible:true } <br/> }); <br/> maps.appendTo('#container')|
| Toggle visibility | **Property:** *layers.legendSettings.toggleVisibility*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { toggleVisibility:true }  }] <br/> }) | **Property:** *legendSettings.toggleVisibility*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { toggleVisibility:true, <br/> &nbsp; toggleLegendSettings: { visible : true } } <br/> }); <br/> maps.appendTo('#container')|
| Legend location X | **Property:** *layers.legendSettings.positionX*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { positionX:250 }  }] <br/> }) | **Property:** *legendSettings.location*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { location:new Point(250,0) } <br/> }); <br/> maps.appendTo('#container')|
| Legend location Y | **Property:** *layers.legendSettings.positionY*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { positionY:350 } }] <br/> }) | **Property:** *legendSettings.location*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { location:new Point(0,350) } <br/> }); <br/> maps.appendTo('#container')|
| Legend type | **Property:** *layers.legendSettings.type*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { type:'Layers' }}] <br/> }) | **Property:** *legendSettings.type*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { type:'Layers' } <br/> }); <br/> maps.appendTo('#container') |
| Label orientation | **Property:** *layers.legendSettings.labelOrientation*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { labelOrientation:'Vertical' } <br/> }) | Not Applicable |
| Legend title | **Property:** *layers.legendSettings.title*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { title:'Union territories of India' }  } <br/> }) | **Property:** *legendSettings.title*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { title: { text : 'Union territories of India' } } <br/> }); <br/> maps.appendTo('#container') |
| Legend Mode | **Property:** *layers.legendSettings.mode*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { mode:'Default' }  }] <br/> }) | **Property:** *legendSettings.mode*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { mode:'Default'}} <br/> }); <br/> maps.appendTo('#container') |
| Legend position | **Property:** *layers.legendSettings.position*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { position:'TopLeft' }}] <br/> }) | **Property:** *legendSettings.position*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { position:'Top' } <br/> }); <br/> maps.appendTo('#container') |
| Legend DockOnMap | **Property:** *layers.legendSettings.dockOnMap*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { dockOnMap:true } } <br/> }) | Not Applicable |
| Legend alignment | **Property:** *layers.legendSettings.dockPosition*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { dockPosition:'Right' }  }] <br/> }) | **Property:** *legendSettings.alignment*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { alignment:'Center' } <br/> }); <br/> maps.appendTo('#container') |
| Legend left label | **Property:** *layers.legendSettings.leftLabel*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { leftLabel:'1000M' }  } <br/> }) | Not Applicable |
| Legend right label | **Property:** *layers.legendSettings.rightLabel*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { rightLabel:'3000M' }  }] <br/> }) | Not Applicable |
| Legend shape | **Property:** *layers.legendSettings.icon*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { icon:'Circle' }  }] <br/> }) | **Property:** *legendSettings.shape*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { shape:'Circle' } <br/> }); <br/> maps.appendTo('#container') |
| Legend shape height | **Property:** *layers.legendSettings.iconHeight*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { iconHeight: 20 }  }] <br/> }) | **Property:** *legendSettings.shapeHeight*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { shapeHeight:20 } <br/> }); <br/> maps.appendTo('#container') |
| Legend shape width | **Property:** *layers.legendSettings.iconWidth*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { iconWidth: 20 }  } <br/> }) | **Property:** *legendSettings.shapeWidth*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { shapeWidth:20 } <br/> }); <br/> maps.appendTo('#container') |
| Height | **Property:** *layers.legendSettings.height*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { height: 50 }  }] <br/> }) | **Property:** *legendSettings.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { height:'50' } <br/> }); <br/> maps.appendTo('#container') |
| Width | **Property:** *layers.legendSettings.width*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { width: 150 }  }] <br/> }) | **Property:** *legendSettings.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { width:'150' } <br/> }); <br/> maps.appendTo('#container') |
| Show labels | **Property:** *layers.legendSettings.showLabels*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:[{ legendSettings: { showLabels: true }  }] <br/> }) | Not Applicable |
| Background | Not Applicable | **Property:** *legendSettings.background*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { background:'transparent' } <br/> }); <br/> maps.appendTo('#container') |
| Label position | Not Applicable | **Property:** *legendSettings.labelPosition*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { labelPosition:'After' } <br/> }); <br/> maps.appendTo('#container') |
| Label display mode | Not Applicable | **Property:** *legendSettings.labelDisplayMode*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { labelDisplayMode:'Trim' } <br/> }); <br/> maps.appendTo('#container') |
| Legend orientation | Not Applicable | **Property:** *legendSettings.orientation*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { orientation:'Horizontal' } <br/> }); <br/> maps.appendTo('#container') |
| Legend item fill | Not Applicable | **Property:** *legendSettings.fill*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { fill:'red' }] <br/> }); <br/> maps.appendTo('#container') |
| Legend shape padding | Not Applicable | **Property:** *legendSettings.shapePadding*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { shapePadding:20 } <br/> }); <br/> maps.appendTo('#container') |
| Legend shape border color | Not Applicable | **Property:** *legendSettings.shapeBorder.color*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { shapeBorder:{ color:'green' } } <br/> }); <br/> maps.appendTo('#container') |
| Legend shape border width | Not Applicable | **Property:** *legendSettings.shapeBorder.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { shapeBorder:{ width:2 } } <br/> }); <br/> maps.appendTo('#container') |
| Inverted pointer | Not Applicable | **Property:** *legendSettings.invertedPointer*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { invertedPointer: true } <br/> }); <br/> maps.appendTo('#container') |
| Item text style | Not Applicable | **Property:** *legendSettings.textStyle*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { textStyle: { size:'12px' } } <br/> }); <br/> maps.appendTo('#container') |
| Title style | Not Applicable | **Property:** *legendSettings.titleStyle*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; legendSettings: { titleStyle: { size:'12px' } } <br/> }); <br/> maps.appendTo('#container') |

## Zooming Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Enable| Not Applicable | **Property:** *zoomSettings.enableZoom*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ enable:true } <br/> }); <br/> maps.appendTo('#container')|
|Minimum zoom| **Property:** *zoomSettings.minValue*<br/><br/> $("#container").ejMap({ <br/> &nbsp; zoomSettings:{ minValue:2 } <br/> }); | **Property:** *zoomSettings.minZoom*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ minZoom:2 } <br/> }); <br/> maps.appendTo('#container')|
|Maximum zoom| **Property:** *zoomSettings.maxValue*<br/><br/> $("#container").ejMap({ <br/> &nbsp; zoomSettings:{ maxValue:50 } <br/> }); | **Property:** *zoomSettings.maxZoom*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ maxZoom:5 } <br/> }); <br/> maps.appendTo('#container')|
|Mouse wheel zoom| **Property:** *zoomSettings.enableMouseWheelZoom*<br/><br/> $("#container").ejMap({ <br/> &nbsp; zoomSettings:{ enableMouseWheelZoom:true } <br/> }); | **Property:** *zoomSettings.mouseWheelZoom*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ mouseWheelZoom:true } <br/> }); <br/> maps.appendTo('#container')|
| Double click zoom | Not Applicable | **Property:** *zoomSettings.doubleClickZoom*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ doubleClickZoom:true } <br/> }); <br/> maps.appendTo('#container')|
| Pinch zoom | Not Applicable | **Property:** *zoomSettings.pinchZooming*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ pinchZooming:true } <br/> }); <br/> maps.appendTo('#container')|
| Single click zoom | **Property:** *zoomSettings.enableZoomOnSelection*<br/><br/> $("#container").ejMap({ <br/> &nbsp; zoomSettings:{ enableZoomOnSelection:true } <br/> });  | **Property:** *zoomSettings.zoomOnClick*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ zoomOnClick:true } <br/> }); <br/> maps.appendTo('#container')|
| Zoom factor | **Property:** *zoomSettings.factor*<br/><br/> $("#container").ejMap({ <br/> &nbsp; zoomSettings:{ factor:2 } <br/> });  | **Property:** *zoomSettings.zoomFactor*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ zoomFactor:2 } <br/> }); <br/> maps.appendTo('#container')|
| Toolbars | Not Applicable | **Property:** *zoomSettings.toolbars*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ toolbars:['ZoomIn'] } <br/> }); <br/> maps.appendTo('#container')|
| Toolbar orientation | Not Applicable | **Property:** *zoomSettings.toolBarOrientation*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ toolBarOrientation:'Horizontal' } <br/> }); <br/> maps.appendTo('#container')|
| Toolbar vertical alignment | Not Applicable | **Property:** *zoomSettings.verticalAlignment*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ verticalAlignment:'Center' } <br/> }); <br/> maps.appendTo('#container')|
| Toolbar horizontal alignment | Not Applicable | **Property:** *zoomSettings.horizontalAlignment*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ horizontalAlignment:'Center' } <br/> }); <br/> maps.appendTo('#container')|
| Toolbar highlight color | Not Applicable | **Property:** *zoomSettings.highlightColor*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ highlightColor:'#e61576' } <br/> }); <br/> maps.appendTo('#container')|
| Toolbar selection color | Not Applicable | **Property:** *zoomSettings.selectionColor*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ selectionColor:'#e61576' } <br/> }); <br/> maps.appendTo('#container')|
| Toolbar fill color | Not Applicable | **Property:** *zoomSettings.color*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ color:'#e61576' } <br/> }); <br/> maps.appendTo('#container')|

## Highlight And Selection Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Highlight fill | **Property:** *layers.shapeSettings.highlightColor*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ shapeSettings:{ highlightColor:'green' } } <br/> }); | **Property:** *layers.highlightSettings.fill*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ highlightSettings:{ fill:'green' }}] <br/> }); <br/> maps.appendTo('#container')|
| Enable highlight | **Property:** *layers.enableMouseHover*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ enableMouseHover:true } <br/> }); | **Property:** *layers.highlightSettings.enable*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ highlightSettings:{ enable:true }}] <br/> }); <br/> maps.appendTo('#container')|
| Highlight border color | **Property:** *layers.shapeSettings.highlightStroke*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ shapeSettings:{ highlightStroke:'red' } } <br/> }); | **Property:** *layers.highlightSettings.border.color*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ highlightSettings:{ border:{ color: 'green'} }}] <br/> }); <br/> maps.appendTo('#container')|
| Highlight border width | **Property:** *layers.shapeSettings.highlightBorderWidth*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ shapeSettings:{ highlightBorderWidth:'2' } } <br/> }); | **Property:** *layers.highlightSettings.border.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ highlightSettings:{ border:{ width: 2 } }}] <br/> }); <br/> maps.appendTo('#container')|
| Highlight opacity | Not Applicable | **Property:** layers.*layers.highlightSettings.opacity*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ highlightSettings:{ opacity: 0.5 }}] <br/> }); <br/> maps.appendTo('#container')|
| Selection fill | **Property:** *layers.shapeSettings.selectionColor*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ shapeSettings:{ selectionColor:'blue' } } <br/> }); | **Property:** *layers.selectionSettings.fill*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{selectionSettings:{ fill:'#D2691E' }}] <br/> }); <br/> maps.appendTo('#container')|
| Selection enable | **Property:** *layers.enableSelection*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ enableSelection:true } <br/> }); | **Property:** *layers.selectionSettings.enable*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{selectionSettings:{ enable:true }}] <br/> }); <br/> maps.appendTo('#container')|
| Selection border width | **Property:** *layers.selectionSettings.selectionStrokeWidth*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ selectionSettings:{ selectionStrokeWidth:'2' } <br/> }); | **Property:** *layers.selectionSettings.border.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{selectionSettings:{ border:{ width:2 } }}] <br/> }); <br/> maps.appendTo('#container')|
| Selection border color | **Property:** *layers.selectionSettings.selectionStroke*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ layers:[{selectionSettings:{ selectionStroke:'red' }}] <br/> }); | **Property:** *layers.selectionSettings.border.color*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{selectionSettings:{ border:{ color:'blue' } }}] <br/> }); <br/> maps.appendTo('#container')|
| Selection opacity | Not Applicable | **Property:** *layers.selectionSettings.opacity*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{selectionSettings:{ opacity:2 }}] <br/> }); <br/> maps.appendTo('#container')|

## Navigation Line Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Visible | Not Applicable | **Property:** *layers.navigationLineSettings.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ visible:true }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Width | Not Applicable | **Property:** *layers.navigationLineSettings.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ width:2 }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Longitude | Not Applicable | **Property:** *layers.navigationLineSettings.longitude*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ longitude: [-97.8717041015625, -89.6649169921875] }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Latitude | Not Applicable | **Property:** *layers.navigationLineSettings.latitude*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ latitude: [22.403410892712124, 21.282336521195344] }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Dash array | Not Applicable | **Property:** *layers.navigationLineSettings.dashArray*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ dashArray:"1,2" }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Color | Not Applicable | **Property:** *layers.navigationLineSettings.color*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ color:"green" }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Angle | Not Applicable | **Property:** *layers.navigationLineSettings.angle*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ angle:180 }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Arrow position | Not Applicable | **Property:** *layers.navigationLineSettings.arrow.position*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ arrowSettings:{ position:"start" } }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Show arrow | Not Applicable | **Property:** *layers.navigationLineSettings.arrow.showArrow*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ arrowSettings:{ showArrow:true } }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Arrow size | Not Applicable | **Property:** *layers.navigationLineSettings.arrow.size*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ arrowSettings:{ size:2 } }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Arrow color | Not Applicable | **Property:** *layers.navigationLineSettings.arrow.color*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ arrowSettings:{ color:'red' } }] }]   <br/> }); <br/> maps.appendTo('#container') |
| Arrow offset | Not Applicable | **Property:** *layers.navigationLineSettings.arrow.offSet*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ navigationLineSettings:[{ arrowSettings:{ offSet:10 } }] }]   <br/> }); <br/> maps.appendTo('#container') |

## Tooltip Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Tooltip enable | **Property:** *layers.showTooltip*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ layers:[{ showTooltip: true }] <br/> }); | **Property:** *layers.tooltipSettings.visible*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ tooltipSettings:{ visible: true } }] <br/> }); <br/> maps.appendTo('#container')|
| Tooltip template | **Property:** *layers.tooltipTemplate*<br/><br/> $("#container").ejMap({ <br/> &nbsp; layers:{ layers:[{ tooltipTemplate: "#Template" }] <br/> }); | **Property:** *layers.tooltipSettings.template*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;layers:[{ tooltipSettings:{ template: '#tooltipTemplate' } }] <br/> }); <br/> maps.appendTo('#container')|
| Value path | Not Applicable | **Property:** *layers.tooltipSettings.valuePath*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ tooltipSettings:{ valuePath:'Population' } }] <br/> }); <br/> maps.appendTo('#container')|
| Format | Not Applicable | **Property:** *layers.tooltipSettings.format*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; tooltipSettings:{ format:'${State}${Population}' } <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container')|
| Border color | Not Applicable | **Property:** *layers.tooltipSettings.border.color*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ tooltipSettings:{ border :{ color:'red' } } }] <br/> }); <br/> maps.appendTo('#container')|
| Border width | Not Applicable | **Property:** *layers.tooltipSettings.border.width*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ tooltipSettings:{ border :{ width: 2 } } }] <br/> }); <br/> maps.appendTo('#container')|
| Text style | Not Applicable | **Property:** *layers.tooltipSettings.textStyle*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layers:[{ <br/> &nbsp; &nbsp; tooltipSettings:{ <br/> &nbsp; &nbsp; &nbsp; textStyle: { size:'15px', color:'red', fontFamily:'arial', fontWeight:'bold', fontStyle:'normal', opacity:0.8 } <br/> &nbsp; &nbsp;} <br/> &nbsp;}] <br/> }); <br/> maps.appendTo('#container')|

## Annotation Cutomization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Content | Not Applicable | **Property:** *legendSettings.annotations.content*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; annotations: [{  content:'<div>USA Population 2018</div>' <br/> &nbsp; }] <br/> }); <br/> maps.appendTo('#container') |
| Location X | Not Applicable | **Property:** *legendSettings.annotations.x*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; annotations: [{ x:'250px' }] <br/> }); <br/> maps.appendTo('#container') |
| Location Y | Not Applicable | **Property:** *legendSettings.annotations.y*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; annotations: [{ y:'150px' }] <br/> }); <br/> maps.appendTo('#container') |
| Vertical alignment | Not Applicable | **Property:** *legendSettings.annotations.verticalAlignment*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; annotations: [{ verticalAlignment:'Center' }] <br/> }); <br/> maps.appendTo('#container') |
| Horizontal alignment | Not Applicable | **Property:** *legendSettings.annotations.horizontalAlignment*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; annotations: [{ horizontalAlignment:'Center' }] <br/> }); <br/> maps.appendTo('#container') |
| Z index | Not Applicable | **Property:** *legendSettings.annotations.zIndex*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; annotations: [{ zIndex:'-1' }] <br/> }); <br/> maps.appendTo('#container') |

## Maps Other Properties Customization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Projection type | Not Applicable | **Property:** *projectionType*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; projectionType: 'Mercator' <br/> }); <br/> maps.appendTo('#container') |
| Background | **Property:** *background*<br/><br/> $("#container").ejMap({ <br/> &nbsp; background:'red' <br/> }); | **Property:** *background*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; background: 'red' <br/> }); <br/> maps.appendTo('#container') |
| Enable group separator | **Property:** *enableGroupSeparator*<br/><br/> $("#container").ejMap({ <br/> &nbsp; enableGroupSeparator:true <br/> }); | **Property:** *useGroupingSeparator*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; useGroupingSeparator: true <br/> }); <br/> maps.appendTo('#container') |
| Base layer index | **Property:** *baseMapIndex*<br/><br/> $("#container").ejMap({ <br/> &nbsp; baseMapIndex:0 <br/> }); | **Property:** *baseLayerIndex*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; baseLayerIndex: 0 <br/> }); <br/> maps.appendTo('#container') |
| locale | **Property:** *locale*<br/><br/> $("#container").ejMap({ <br/> &nbsp; locale:'en-us' <br/> }); |**Property:** *locale*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; locale: 'en-US' <br/> }); <br/> maps.appendTo('#container') |
| Responsive | **Property:** *isResponsive*<br/><br/> $("#container").ejMap({ <br/> &nbsp; isResponsive:true <br/> }); | Not Applicable |
| Enable pan | **Property:** *enablePan*<br/><br/> $("#container").ejMap({ <br/> &nbsp; enablePan:true <br/> }); | **Property:** *zoomSettings.enablePanning*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; zoomSettings:{ enablePanning: true } <br/> }); <br/> maps.appendTo('#container')|
| Enable navigation | **Property:** *navigationControl.enableNavigation*<br/><br/> $("#container").ejMap({ <br/> &nbsp; navigationControl:{ enableNavigation:true } <br/> }); | Not Applicable |
| Navigation orientation | **Property:** *navigationControl.orientation*<br/><br/> $("#container").ejMap({ <br/> &nbsp; navigationControl:{ orientation:'vertical' } <br/> }); | Not Applicable |
| Navigation dock position | **Property:** *navigationControl.dockPosition*<br/><br/> $("#container").ejMap({ <br/> &nbsp; navigationControl:{ dockPosition:'centerleft' } <br/> }); | Not Applicable |
| Navigation absolute position | **Property:** *navigationControl.absolutePosition*<br/><br/> $("#container").ejMap({ <br/> &nbsp; navigationControl:{ absolutePosition:{ x: 100, y : 100 } } <br/> }); | Not Applicable |
| Dragging selection | **Property:** *draggingOnSelection*<br/><br/> $("#container").ejMap({ <br/> &nbsp; draggingOnSelection : true <br/> }); | Not Applicable |
| Resize | **Property:** *enableResize*<br/><br/> $("#container").ejMap({ <br/> &nbsp; enableResize : true <br/> }); | Not Applicable |
| Enable animation | **Property:** *enableAnimation*<br/><br/> $("#container").ejMap({ <br/> &nbsp; enableAnimation : true <br/> }); | Not Applicable |
| Enable layer animation | **Property:** *enableLayerChangeAnimation*<br/><br/> $("#container").ejMap({ <br/> &nbsp; enableLayerChangeAnimation : true <br/> }); | Not Applicable |
| Center position | **Property:** *centerPosition*<br/><br/> $("#container").ejMap({ <br/> &nbsp; centerPosition:[90.52734374999999,30.41078179084589] <br/> }); | **Property:** *centerPosition*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; centerPosition: { <br/> &nbsp; &nbsp; latitude: 30.41078179084589, <br/> &nbsp; &nbsp; longitude: 90.52734374999999 <br/> &nbsp; } <br/> }); <br/> maps.appendTo('#container') |

## Events

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Shape selected | **Property:** *shapeSelected*<br/><br/> $("#container").ejMap({ <br/> &nbsp; shapeSelected:'MapShapeSelected' <br/> });  | **Property:** *shapeSelected*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; shapeSelected: (args: IShapeSelectedEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Marker selected | **Property:** *markerSelected*<br/><br/> $("#container").ejMap({ <br/> &nbsp; markerSelected:'MapMarkerSelected' <br/> });  | **Property:** *markerClick*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; markerClick: (args: IMarkerClickEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Marker move | **Property:** *markerEnter*<br/><br/> $("#container").ejMap({ <br/> &nbsp; markerEnter:'MapMarkerMove' <br/> });  | **Property:** *markerMouseMove*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; markerMouseMove: (args: IMarkerMoveEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Marker leave | **Property:** *markerLeave*<br/><br/> $("#container").ejMap({ <br/> &nbsp; markerLeave:'MapMarkerLeave' <br/> }); | Not Applicable |
| Legend item rendering | **Property:** *legendItemRendering*<br/><br/> $("#container").ejMap({ <br/> &nbsp; legendItemRendering:'MapLegendItemRendering' <br/> });  | **Property:** *legendRendering*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp;  legendRendering: (args: ILayerRenderingEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Display text rendering | **Property:** *displayTextRendering*<br/><br/> $("#container").ejMap({ <br/> &nbsp; displayTextRendering:'MapDisplayTextRendering' <br/> });  | **Property:** *dataLabelRendering*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; dataLabelRendering: (args: ILabelRenderingEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container')  |
| Legend item click | **Property:** *legendItemClick*<br/><br/> $("#container").ejMap({ <br/> &nbsp; legendItemClick:'MapLegendItemClick' <br/> });  | Not Applicable |
| Bubble rendering | **Property:** *bubbleRendering*<br/><br/> $("#container").ejMap({ <br/> &nbsp; bubbleRendering:'MapBubbleRendering' <br/> });  | **Property:** *bubbleRendering*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; bubbleRendering: (args: IBubbleRenderingEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container')  |
| Shape rendering | **Property:** *shapeRendering*<br/><br/> $("#container").ejMap({ <br/> &nbsp; shapeRendering:'MapShapeRendering' <br/> });  | **Property:** *shapeRendering*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; shapeRendering: (args: IShapeRenderingEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container')  |
| Zoomed in | **Property:** *zoomedIn*<br/><br/> $("#container").ejMap({ <br/> &nbsp; zoomedIn:'MapZooming' <br/> }); | Not Applicable |
| Render completed | **Property:** *onRenderComplete*<br/><br/> $("#container").ejMap({ <br/> &nbsp; onRenderComplete:'MapRenderCompleted' <br/> }); | **Property:** *loaded*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; loaded: (args: ILoadedEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container')  |
| Panned | **Property:** *panned*<br/><br/> $("#container").ejMap({ <br/> &nbsp; panned:'MapPanned' <br/> }); | **Property:** *pan*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; pan: (args: IMapPanEventArgs): void => {} <br/> }); <br/> maps.appendTo('#container') |
| Zoomed out | **Property:** *zoomedOut*<br/><br/> $("#container").ejMap({ <br/> &nbsp; zoomedOut:'MapZoomedOut' <br/> }); | Not Applicable |
| Mouse over | **Property:** *mouseover*<br/><br/> $("#container").ejMap({ <br/> &nbsp; mouseover:'MapMouseOver' <br/> }); | Not Applicable |
| Mouse leave | **Property:** *mouseleave*<br/><br/> $("#container").ejMap({ <br/> &nbsp; mouseover:'MapMouseLeave' <br/> }); | Not Applicable |
| Click | **Property:** *click*<br/><br/> $("#container").ejMap({ <br/> &nbsp; click:'ClickOnMap' <br/> }); | **Property:** *click*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; click: (args: IMouseEventArgs): void => {} <br/> }); <br/> maps.appendTo('#container') |
| Double click | **Property:** *doubleClick*<br/><br/> $("#container").ejMap({ <br/> &nbsp; doubleClick:'DoubleClickOnMap' <br/> }); | **Property:** *doubleClick*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; doubleClick: (args: IMouseEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Right click | **Property:** *rightClick*<br/><br/> $("#container").ejMap({ <br/> &nbsp; rightClick:'RightClickOnMap' <br/> }); | **Property:** *rightClick*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; rightClick: (args: IMouseEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Initial load | **Property:** *onLoad*<br/><br/> $("#container").ejMap({ <br/> &nbsp; onLoad:'loadOnMap' <br/> }); | **Property:** *load*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; load: (args: ILoadedEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Before print | Not Applicable | **Property:** *beforePrint*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; beforePrint: (args: IPrintEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Resize | Not Applicable | **Property:** *resize*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; resize: (args: IResizeEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Tooltip render | Not Applicable | **Property:** *tooltipRender*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; tooltipRender: (args: ITooltipRenderEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Item selection | Not Applicable | **Property:** *itemSelection*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; itemSelection: (args: ISelectionEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Item highlight | Not Applicable | **Property:** *itemHighlight*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; itemHighlight: (args: ISelectionEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Shape highlight | Not Applicable | **Property:** *shapeHighlight*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; shapeHighlight: (args: IShapeSelectedEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Layer rendering | Not Applicable | **Property:** *layerRendering*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; layerRendering: (args: ILayerRenderingEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Marker rendering | Not Applicable | **Property:** *markerRendering*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; markerRendering: (args: IMarkerRenderingEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Bubble mouse move | Not Applicable | **Property:** *bubbleMouseMove*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; bubbleMouseMove: (args: IBubbleMoveEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Bubble mouse move | Not Applicable | **Property:** *annotationRendering*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; annotationRendering: (args: IAnnotationRenderingEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |
| Animation complete | Not Applicable | **Property:** *animationComplete*<br/><br/> let maps: Maps = new Maps({ <br/> &nbsp; animationComplete: (args: IAnimationCompleteEventArgs): void => { } <br/> }); <br/> maps.appendTo('#container') |