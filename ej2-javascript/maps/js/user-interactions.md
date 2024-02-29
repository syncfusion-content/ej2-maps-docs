---
layout: post
title: User interactions in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about User interactions in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: User interactions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# User interactions in ##Platform_Name## Maps control

Zooming, panning, single and double click, highlight and selection are all options that allow for effective interaction with Map elements.

## Zooming

The zooming feature is used to zoom in and out of Maps to show in-depth information. It is controlled by the  [`zoomFactor`](../api/maps/zoomSettingsModel/#zoomfactor) property of the [`zoomSettings`](../api/maps/zoomSettingsModel) of the Maps. The  [`zoomFactor`](../api/maps/zoomSettingsModel/#zoomfactor) is increased or decrease dynamically based on zoom in and out interaction.

### Enable Zooming

Zooming of Maps is enabled by setting the [`enable`](../api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](../api/maps/zoomSettingsModel/) to **true**. To enable Zooming in Maps, the **Zoom** module must be injected into Maps using **Maps.Inject(Zoom)** method.

<!-- markdownlint-disable MD010 -->

### Enable panning

To enable the panning feature, set the [`enablePanning`](../api/maps/zoomSettingsModel/#enablepanning) property of [`zoomSettings`](../api/maps/zoomSettingsModel) to **true**.

```ts

var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
		enablePanning:true
    },
    layers: [{
        shapeData: world_map,
    }]
});
map.appendTo('#element');

```

### Various type of zooming

Zooming can be performed in following types:

<b>Zooming toolbar</b>

By default, the toolbar is rendered with **zoom-in**, **zoom-out**, and **reset** options when it is set to **true** in the [`enable`](../api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](../api/maps/zoomSettingsModel/).

The following options are available in toolbar.

1. Zoom - Provides rectangular zoom support.
2. ZoomIn - Zooms in the Maps.
3. ZoomOut - Zooms out the Maps.
4. Pan - Switches to panning if rectangular zoom is activated.
5. Reset - Restores the Maps to the default view.

Refer the [`API`](../api/maps/zoomSettingsModel) links for Zooming.

```ts

var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        toolbarSettings: {
           buttonSettings: {
              toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
           }
        }
    },
    layers: [{
        shapeData: usa_map,
    }]
});
map.appendTo('#element');
```

<b>Pinch zooming</b>

To enable or disable the pinch zooming, use the [`pinchZooming`](../api/maps/zoomSettingsModel/#pinchzooming) property in [`zoomSettings`](../api/maps/zoomSettingsModel).

```ts
var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        pinchZooming: true
    },
    layers: [{
        shapeData: usa_map,
    }]
});
map.appendTo('#element');
```

<b>Single-click zooming</b>

To enable or disable the single-click zooming, use the [`zoomOnClick`](../api/maps/zoomSettingsModel/#zoomonclick) property in [`zoomSettings`](../api/maps/zoomSettingsModel).

```ts
var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        zoomOnClick: true
    },
    layers: [{
        shapeData: usa_map,
    }]
});
map.appendTo('#element');
```

<b>Double-click zooming</b>

To enable or disable the double-click zooming, use the [`doubleClickZoom`](../api/maps/zoomSettingsModel/#doubleclickzoom) property in [`zoomSettings`](../api/maps/zoomSettingsModel/).

```ts
var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        doubleClickZoom: true
    },
    layers: [{
        shapeData: usa_map,
    }]
});
map.appendTo('#element');
```

<b>Mouse wheel zooming</b>

To enable or disable mouse wheel zooming, use the [`mouseWheelZoom`](../api/maps/zoomSettingsModel/#mousewheelzoom) property in [`zoomSettings`](../api/maps/zoomSettingsModel/).

```ts
var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        mouseWheelZoom: true
    },
    layers: [{
        shapeData: usa_map,
    }]
});
map.appendTo('#element');
```

### Minimum and maximum zooming

The zooming range can be adjusted using the [`minZoom`](../api/maps/zoomSettingsModel/#minzoom) and [`maxZoom`](../api/maps/zoomSettingsModel/#maxzoom) properties in [`zoomSettings`](../api/maps/zoomSettingsModel/). The minZoom value is set to **1** by default, and the maxZoom value is set to **10**.

```ts
var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
        minZoom: 2,
        maxZoom: 12
    },
    layers: [{
        shapeData: usa_map,
    }]
});
map.appendTo('#element');
```

### Zooming with animation

To zoom in or zoom out the Maps with animation, use the [`animationDuration`](../api/maps/layerSettingsModel/#animationduration) property in [`layers`](../api/maps/layerSettingsModel).

```ts
var map = new ej.maps.Maps({
    zoomSettings: {
        enable: true,
    },
    layers: [{
        shapeData: usa_map,
        animationDuration: 500
    }]
});
map.appendTo('#element');
```

### Customizing the zoom toolbar

The zoom toolbar can be customized by using the [toolbarSettings](../api/maps/zoomSettingsModel/#toolbarsettings) option in the [zoomSettings](../api/maps/zoomSettingsModel). The following properties can be used to customize the zoom toolbar.

* [backgroundColor](../api/maps/zoomToolbarSettingsModel/#backgroundcolor) - It is used to customize the background color of the zoom toolbar.
* [borderOpacity](../api/maps/zoomToolbarSettingsModel/#borderopacity) - It is used to customize the opacity of the border of the zoom toolbar.
* [borderWidth](../api/maps/zoomToolbarSettingsModel/#borderwidth) - It is used to customize the thickness of the border of the zoom toolbar.
* [borderColor](../api/maps/zoomToolbarSettingsModel/#bordercolor) - It is used to customize the color of the border of the zoom toolbar.
* [horizontalAlignment](../api/maps/zoomToolbarSettingsModel/#horizontalalignment) - It is used to position the zoom toolbar in near, far, and center positions to customize its horizontal placement.
* [verticalAlignment](../api/maps/zoomToolbarSettingsModel/#verticalalignment) - It is used to position the zoom toolbar in near, far, and center positions to customize its vertical placement.
* [orientation](../api/maps/zoomToolbarSettingsModel/#orientation) - It is used to change the orientation (horizontal/vertical) of the zoom toolbar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs96/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs96/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs96" %}

<!-- markdownlint-disable MD036 -->
**Customizing the buttons in the zoom toolbar**

The appearance of the buttons in the zoom toolbar can be customized by using the [buttonSettings](../api/maps/zoomToolbarSettingsModel/#buttonsettings) option in the [toolbarSettings](../api/maps/zoomSettingsModel/#toolbarsettings) of the [zoomSettings](../api/maps/zoomSettingsModel) property. The following properties can be used to customize the zoom toolbar buttons.

* [fill](../api/maps/zoomToolbarButtonSettingsModel/#fill) - It is used to set the background color of the buttons.
* [color](../api/maps/zoomToolbarButtonSettingsModel/#color) - It is used to customize the color of the icons inside the button.
* [borderOpacity](../api/maps/zoomToolbarButtonSettingsModel/#borderopacity) - It is used to set the opacity of the border of the zoom toolbar buttons.
* [borderWidth](../api/maps/zoomToolbarButtonSettingsModel/#borderwidth) - It is used to set the thickness of the border of the zoom toolbar buttons.
* [borderColor](../api/maps/zoomToolbarButtonSettingsModel/#bordercolor) - It is used to set the color of the border of the zoom toolbar buttons.
* [radius](../api/maps/zoomToolbarButtonSettingsModel/#radius) - It is used to set the size of the button.
* [selectionColor](../api/maps/zoomToolbarButtonSettingsModel/#selectioncolor) - It is used to set the color of the icons inside the button when selection is performed.
* [highlightColor](../api/maps/zoomToolbarButtonSettingsModel/#highlightcolor) - It is used to change the color of the button when the mouse is hovered over it.
* [padding](../api/maps/zoomToolbarButtonSettingsModel/#padding) - It is used to change the padding space between each button.
* [opacity](../api/maps/zoomToolbarButtonSettingsModel/#opacity) - It is used to change the opacity of the button.
* [toolbarItems](../api/maps/zoomToolbarButtonSettingsModel/#toolbaritems) - It is used to change the items that should be displayed in the zoom toolbar. By default, zoom-in, zoom-out, and reset buttons will be available. Other options include selection zoom and panning.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs97/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs97/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs97" %}

<!-- markdownlint-disable MD036 -->
**Customizing the tooltip of the zoom toolbar**

The appearance of the tooltip of the zoom toolbar can be customized by using the [tooltipSettings](../api/maps/zoomToolbarSettingsModel/#tooltipsettings) option in the [toolbarSettings](../api/maps/zoomSettingsModel/#toolbarsettings) of the [zoomSettings](../api/maps/zoomSettingsModel) property. The following properties are available to customize the zoom toolbar tooltip.

* [visible](../api/maps/zoomToolbarTooltipSettingsModel/#visible) - Enables or disables the tooltip of the zoom toolbar.
* [fill](../api/maps/zoomToolbarTooltipSettingsModel/#fill) - It is used to change the background color of the tooltip of the zoom toolbar.
* [borderOpacity](../api/maps/zoomToolbarTooltipSettingsModel/#borderopacity) - It is used to change the opacity of the border of the zoom toolbar's tooltip.
* [borderWidth](../api/maps/zoomToolbarTooltipSettingsModel/#borderwidth) - It is used to change the thickness of the border of the zoom toolbar's tooltip.
* [borderColor](../api/maps/zoomToolbarTooltipSettingsModel/#bordercolor) - It is used to change the color of the border of the zoom toolbar's tooltip.
* [fontColor](../api/maps/zoomToolbarTooltipSettingsModel/#fontcolor) - It is used to change the color of the text in the tooltip of the zoom toolbar.
* [fontFamily](../api/maps/zoomToolbarTooltipSettingsModel/#fontfamily) - It is used to change the font family of the text in the tooltip of the zoom toolbar.
* [fontStyle](../api/maps/zoomToolbarTooltipSettingsModel/#fontstyle) - It is used to change the font style of the text in the tooltip of the zoom toolbar.
* [fontWeight](../api/maps/zoomToolbarTooltipSettingsModel/#fontweight) - It is used to change the font weight of the text in the tooltip of the zoom toolbar.
* [fontSize](../api/maps/zoomToolbarTooltipSettingsModel/#fontsize) - It is used to change the size of the text in the tooltip of the zoom toolbar.
* [fontOpacity](../api/maps/zoomToolbarTooltipSettingsModel/#fontopacity) - It is used to change the opacity of the text in the tooltip of the zoom toolbar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs98/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs98/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs98" %}

## Selection

Each shape in the Maps can be selected and deselected during interaction with the shapes. Selection is enabled by setting the [`enable`](../api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](../api/maps/selectionSettingsModel) to **true**.

The following properties are available to customize the selection of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](../api/maps/selectionSettingsModel/#border) - To customize the color, width and opacity of the border of which element is selected in Maps.
* [`fill`](../api/maps/selectionSettingsModel/#fill) - Applies the color for the element that is selected.
* [`opacity`](../api/maps/selectionSettingsModel/#opacity) - To customize the transparency for the element that is selected.
* [`enableMultiSelect`](../api/maps/selectionSettingsModel/#enablemultiselect) - To enable or disable the selection for multiple shapes or markers or bubbles in the Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs99/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs99/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs99" %}

### Enable selection for bubbles

To enable the selection for bubbles in Maps, set the [`selectionSettings`](../api/maps/selectionSettingsModel) in [`bubbleSettings`](../api/maps/bubbleSettingsModel/) and set the [`enable`](../api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](../api/maps/selectionSettingsModel) as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs100/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs100/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs100" %}

### Enable selection for markers

To enable the selection for markers in Maps, set the [`selectionSettings`](../api/maps/selectionSettingsModel) in the [`markerSettings`](../api/maps/markerSettingsModel) and set the [`enable`](../api/maps/selectionSettingsModel/#enable) property of the [`selectionSettings`](../api/maps/selectionSettingsModel) as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs101/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs101/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs101" %}

### Enable selection for polygons

When the [enable](../api/maps/selectionSettingsModel/#enable) property of [selectionSettings](../api/maps/polygonSettingsModel/#selectionsettings) is set to **true**, the polygon shapes can be selected via user interaction. The following properties are available in `selectionSettings` to customize the polygon shape when it is selected.

* [enableMultiSelect](../api/maps/selectionSettingsModel/#enablemultiselect) - It is used to enable multiple selection of polygon shapes.
* [fill](../api/maps/selectionSettingsModel/#fill) - It is used to change the color of the selected polygon shape.
* [opacity](../api/maps/selectionSettingsModel/#opacity) - It is used to change the opacity of the selected polygon shape.
* [border](../api/maps/selectionSettingsModel/#border) - This property is used to change the color, width, and opacity of the border of the selected polygon shape.

The following example shows how to select the polygon shape in the geometry map.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/polygon-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs2/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs2" %}

### Public method for the shape selection

The [`shapeSelection`](../api/maps/#shapeselection) method can be used to select each shape in the Maps.
LayerIndex, propertyName, country name, and selected value as a boolean state(true / false) are the input parameters for this method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/selection-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/selection-method-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/selection-method-cs1" %}

### Initial shape selection

The shape is initially selected using the [`initialShapeSelection`](../api/maps/initialShapeSelectionSettingsModel/) property, and the values are mapped to the [`shapePath`](../api/maps/initialShapeSelectionSettingsModel/#shapepath) and [`shapeValue`](../api/maps/initialShapeSelectionSettingsModel/#shapevalue).

>initialShapeSelection is an Array property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs102/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs102/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs102" %}

### Initial marker selection

Using the [`initialMarkerSelection`](../api/maps/initialMarkerSelectionSettingsModel) property, the marker shape can be selected initially. Markers render based on the [`latitude`](../api/maps/initialMarkerSelectionSettingsModel/#latitude) and [`longitude`](../api/maps/initialMarkerSelectionSettingsModel/#longitude) values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs103/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs103/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs103" %}

## Highlight

Each shape in the Map can be highlighted during mouse hover on the Map elements such as shapes, bubbles, markers and legends. Highlight is enabled by setting the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) to **true**.

The following properties are available to customize the highlight of Map elements such as shapes, bubbles, markers and legends.

* [`border`](../api/maps/highlightSettingsModel/#border) - To customize the color, width and opacity of the border of which element is highlighted in Maps.
* [`fill`](../api/maps/highlightSettingsModel/#fill) - Applies the color for the element that is highlighted.
* [`opacity`](../api/maps/highlightSettingsModel/#opacity) - To customize the transparency for the element that is highlighted.

Hovering on the specific legend, the shapes which are bounded to the selected legend is also highlighted and vice versa.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs104/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs104/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs104" %}

### Enable highlight for bubbles

To enable the highlight for bubbles in Maps, set the [`highlightSettings`](../api/maps/highlightSettingsModel) in [`bubbleSettings`](../api/maps/bubbleSettingsModel) and set the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs105/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs105/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs105" %}

### Enable highlight for markers

To enable the highlight for markers in Maps, set the [`highlightSettings`](../api/maps/highlightSettingsModel) in [`markerSettings`](../api/maps/markerSettingsModel) and set the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs106/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs106/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs106" %}

### Enable highlight for polygons

The polygon shapes can be highlighted via user interaction if the [enable](../api/maps/highlightSettingsModel/#enable) property of [highlightSettings](../api/maps/polygonSettingsModel/#highlightsettings) is set to **true**. The following properties are available in `highlightSettings` to customize the polygon shape when it is highlighted.

* [fill](../api/maps/highlightSettingsModel/#fill) - It is used to change the color of the highlighted polygon shape.
* [opacity](../api/maps/highlightSettingsModel/#opacity) - It is used to change the opacity of the highlighted polygon shape.
* [border](../api/maps/highlightSettingsModel/#border) - This property is used to change the color, width, and opacity of the border of the highlighted polygon shape.

The following example shows how to highlight a polygon shape on a geometry map.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/polygon-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs3/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs3" %}

## Tooltip

On mouse over or touch end event, the tooltip is used to get more information about the layer, bubble, or marker. It can be enabled separately for layer or bubble or marker by using the [`visible`](../api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel/) as **true**. The [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property in the tooltip takes the field name that presents in data source and displays that value as tooltip text. The [`tooltipDisplayMode`](../api/maps/mapsModel/#tooltipdisplaymode) property is used to change the display mode of the tooltip in Maps. Following display modes of tooltip are available in the Maps component. By default,  [`tooltipDisplayMode`](../api/maps/mapsModel/#tooltipdisplaymode) is set to **MouseMove**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs107/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs107/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs107" %}

### Customization

The following properties are available in the [`tooltipSettings`](../api/maps/tooltipSettingsModel/) to customize the tooltip of the Maps component.

* [`border`](../api/maps/tooltipSettingsModel/#border) - To customize the color, width and opacity of the border of the tooltip in layers, markers, and bubbles of Maps.
* [`fill`](../api/maps/tooltipSettingsModel/#fill) - Applies the color of the tooltip in layers, markers, and bubbles of Maps.
* [`format`](../api/maps/tooltipSettingsModel/#format) - To customize the format of the tooltip in layers, markers, and bubbles of Maps
* [`textStyle`](../api/maps/tooltipSettingsModel/#textstyle) - To customize the style of the text in the tooltip for layers, markers, and bubbles of Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs108/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs108/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs108" %}

### Tooltip template

The HTML element can be rendered in the tooltip of the Maps using the [`template`](../api/maps/tooltipSettingsModel/#template) property of the [`tooltipSettings`](../api/maps/tooltipSettingsModel/). In the following example, ${value1} and ${value2} are the place holders in the HTML element to display the value1 and value2 values of the corresponding shape.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/tooltip-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/tooltip-template-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/tooltip-template-cs1" %}

## See Also

* [Center position zooming](../maps/how-to/zooming)
* [Tooltip for marker](../maps/how-to/marker-type)
* [Navigating to particular country](../maps/how-to/navigation-line)
