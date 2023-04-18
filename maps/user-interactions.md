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

## Zooming

The zooming feature is used to zoom in and out of Maps to show in-depth information. It is controlled by the [`zoomFactor`](../api/maps/zoomSettingsModel/#zoomfactor) property of the [`zoomSettings`](../api/maps/zoomSettingsModel) of the Maps. The [`zoomFactor`](../api/maps/zoomSettingsModel/#zoomfactor) is increased or decrease dynamically based on zoom in and out interaction.

<b>Enable zooming</b>

Zooming of Maps is enabled by setting the [`enable`](../api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](../api/maps/zoomSettingsModel/) to **true**.

<b>Enable panning</b>

To enable the panning feature, set the [`enablePanning`](../api/maps/zoomSettingsModel/#enablepanning) property of [`zoomSettings`](../api/maps/zoomSettingsModel) to **true**.

```ts
import { world_map } from './world-map.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    layers: [{
        shapeData: world_map,
    }],
    zoomSettings:{
        enable:true,
        enablePanning:true
    }
});

```

### Various type of zooming

Zooming can be performed in following types:

#### Zooming toolbar

By default, the toolbar is rendered with **zoom-in**, **zoom-out**, and **reset** options when it is set to **true** in the [`enable`](../api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](../api/maps/zoomSettingsModel/).

The following options are available in toolbar.

1. Zoom - Provides rectangular zoom support.
2. ZoomIn - Zooms in the Maps.
3. ZoomOut - Zooms out the Maps.
4. Pan - Switches to panning if rectangular zoom is activated.
5. Reset - Restores the Maps to the default view.

The following properties are available in toolbars to customize the zooming toolbars.

* [`color`](../api/maps/zoomSettingsModel/#color) - To apply the color for toolbars in Maps.
* [`highlightColor`](../api/maps/zoomSettingsModel/#highlightcolor) - To apply the color for the zooming toolbar when the mouse has hovered on the toolbar element in Maps.
* [`horizontalAlignment`](../api/maps/zoomSettingsModel/#horizontalalignment) - To customize the position type of toolbar when it is placed horizontally.
* [`selectionColor`](../api/maps/zoomSettingsModel/#selectioncolor) - To apply the color for the zooming toolbar when clicking the zooming toolbar in Maps.
* [`toolBarOrientation`](../api/maps/zoomSettingsModel/#toolbarorientation) - To customize the orientation of the zooming toolbar.
* [`toolbars`](../api/maps/zoomSettingsModel/#toolbars) - To customize the items that are to be shown in the zooming toolbar in Maps.
* [`verticalAlignment`](../api/maps/zoomSettingsModel/#verticalalignment) - To customize the position type of toolbar when it is placed vertically.

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        color: 'green',
        highlightColor: 'blue',
        selectionColor: 'orange',
        horizontalAlignment: 'Center',
        toolbars: ['ZoomIn', 'ZoomOut', 'Pan', 'Reset']
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Pinch zooming

To enable or disable the pinch zooming, use the [`pinchZooming`](../api/maps/zoomSettingsModel/#pinchzooming) property in [`zoomSettings`](../api/maps/zoomSettingsModel).

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        pinchZooming: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Single-click zooming

To enable or disable the single-click zooming, use the [`zoomOnClick`](../api/maps/zoomSettingsModel/#zoomonclick) property in [`zoomSettings`](../api/maps/zoomSettingsModel).

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        zoomOnClick: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Double-click zooming

To enable or disable the double-click zooming, use the [`doubleClickZoom`](../api/maps/zoomSettingsModel/#doubleclickzoom) property in [`zoomSettings`](../api/maps/zoomSettingsModel/).

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        doubleClickZoom: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Mouse wheel zooming

To enable or disable mouse wheel zooming, use the [`mouseWheelZoom`](../api/maps/zoomSettingsModel/#mousewheelzoom) property in [`zoomSettings`](../api/maps/zoomSettingsModel/).

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        mouseWheelZoom: true
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

#### Selection zooming

To enable or disable selection zooming, use the [`enableSelectionZooming`](../api/maps/zoomSettingsModel/#enableselectionzooming) property in [`zoomSettings`](../api/maps/zoomSettingsModel/). The [`enablePanning`](../api/maps/zoomSettingsModel/#enablepanning) property must be set to **false** to enable the selection zooming in Maps.

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        enableSelectionZooming: true,
        enablePanning: false
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

### Setting minimum and maximum values for zoom factor

The zooming range can be adjusted using the [`minZoom`](../api/maps/zoomSettingsModel/#minzoom) and [`maxZoom`](../api/maps/zoomSettingsModel/#maxzoom) properties in [`zoomSettings`](../api/maps/zoomSettingsModel/). The minZoom value is set to 1 by default, and the maxZoom value is set to 10.

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
        minZoom: 2,
        maxZoom: 12
    },
    layers: [{
        shapeData: usmap,
    }]
});
map.appendTo('#element');
```

### Zooming with animation

To zoom in or zoom out the Maps with animation, use the [`animationDuration`](../api/maps/layerSettingsModel/#animationduration) property in [`layers`](../api/maps/layerSettingsModel).

```ts
import { usmap } from 'usa.ts';
import { Maps, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Zoom);
let map: Maps = new Maps({
    zoomSettings: {
        enable: true,
    },
    layers: [{
        shapeData: usmap,
        animationDuration: 500
    }]
});
map.appendTo('#element');
```

## Selection

Each shape in the Maps can be selected and deselected during interaction with the shapes. Selection is enabled by setting the [`enable`](../api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](../api/maps/selectionSettingsModel) to **true**.

The following properties are available to customize the selection of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](../api/maps/selectionSettingsModel/#border) - To customize the color, width and opacity of the border of which element is selected in Maps.
* [`fill`](../api/maps/selectionSettingsModel/#fill) - Applies the color for the element that is selected.
* [`opacity`](../api/maps/selectionSettingsModel/#opacity) - To customize the transparency for the element that is selected.
* [`enableMultiSelect`](../api/maps/selectionSettingsModel/#enablemultiselect) - To enable or disable the selection for multiple shapes or markers or bubbles in the Maps.

By tapping on the specific legend, the shapes which are bounded to the selected legend is also selected and vice versa.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs225/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs225/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs225" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs225/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs225/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs225" %}
{% endif %}

### Enable selection for bubbles

To enable the selection for bubbles in Maps, set the [`selectionSettings`](../api/maps/selectionSettingsModel) in [`bubbleSettings`](../api/maps/bubbleSettingsModel/) and set the [`enable`](../api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](../api/maps/selectionSettingsModel) as **true**.

>To use the bubble feature, the Bubble module must be injected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs226/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs226/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs226" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs226/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs226/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs226" %}
{% endif %}

### Enable selection for markers

To enable the selection for markers in Maps, set the [`selectionSettings`](../api/maps/selectionSettingsModel) in the [`markerSettings`](../api/maps/markerSettingsModel) and set the [`enable`](../api/maps/selectionSettingsModel/#enable) property of the [`selectionSettings`](../api/maps/selectionSettingsModel) as **true**.

>To use the marker feature, the Marker module must be injected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs227/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs227/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs227" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs227/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs227/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs227" %}
{% endif %}

### Public method for the shape selection

The [`shapeSelection`](../api/maps/#shapeselection) method can be used to select each shape in the Maps. LayerIndex, propertyName, country name, and selected value as a boolean state(true / false) are the input parameters for this method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/selection-method-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/selection-method-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/selection-method-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/selection-method-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/selection-method-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/selection-method-cs3" %}
{% endif %}

### Initial shape selection

The shape is initially selected using the [`initialShapeSelection`](../api/maps/initialShapeSelectionSettingsModel/), and the values are mapped to the [`shapePath`](../api/maps/initialShapeSelectionSettingsModel/#shapepath) and [`shapeValue`](../api/maps/initialShapeSelectionSettingsModel/#shapevalue).

>initialShapeSelection is an Array property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs228/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs228/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs228" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs228/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs228/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs228" %}
{% endif %}

### Initial marker selection

Using the [`initialMarkerSelection`](../api/maps/initialMarkerSelectionSettingsModel), the marker shape can be selected initially. Markers render based on the [`latitude`](../api/maps/initialMarkerSelectionSettingsModel/#latitude) and [`longitude`](../api/maps/initialMarkerSelectionSettingsModel/#longitude) values.

>initialMarkerSelection is an Array property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs229/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs229/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs229" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs229/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs229/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs229" %}
{% endif %}

## Highlight

Each shape in the Maps elements such as shapes, bubbles, markers and legends. Highlight is enabled by setting the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) to **true**.

The following properties are available to customize the highlight of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](../api/maps/highlightSettingsModel/#border) - To customize the color, width and opacity of the border of which element is highlighted in Maps.
* [`fill`](../api/maps/highlightSettingsModel/#fill) - Applies the color for the element that is highlighted.
* [`opacity`](../api/maps/highlightSettingsModel/#opacity) - To customize the transparency for the element that is highlighted.

Hovering on the specific legend, the shapes which are bounded to the selected legend is also highlighted and vice versa.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs230/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs230/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs230" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs230/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs230/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs230" %}
{% endif %}

### Enable highlight for bubbles

To enable the highlight for bubbles in Maps, set the [`highlightSettings`](../api/maps/highlightSettingsModel) in [`bubbleSettings`](../api/maps/bubbleSettingsModel) and set the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) as **true**.

>To use the bubble feature, the Bubble module must be injected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs231/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs231/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs231" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs231/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs231/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs231" %}
{% endif %}

### Enable highlight for markers

To enable the highlight for markers in Maps, set the [`highlightSettings`](../api/maps/highlightSettingsModel) in [`markerSettings`](../api/maps/markerSettingsModel) and set the [`enable`](../api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](../api/maps/highlightSettingsModel) as **true**.

>To use the marker feature, the Marker module must be injected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs232/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs232/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs232" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs232/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs232/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs232" %}
{% endif %}

## Tooltip

On mouse over or touch end event, the tooltip is used to get more information about the layer, bubble, or marker. To enable tooltip in Maps, the **Tooltip** module must be injected into Maps using **Maps.Inject(Tooltip)** method. It can be enabled separately for layer or bubble or marker by using the [`visible`](../api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel/) as **true**. The [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property in the tooltip takes the field name that presents in data source and displays that value as tooltip text. The [`tooltipDisplayMode`](../api/maps/mapsModel/#tooltipdisplaymode) property is used to change the display mode of the tooltip in Maps. Following display modes of tooltip are available in the Maps component. By default, [`tooltipDisplayMode`](../api/maps/mapsModel/#tooltipdisplaymode) is set to **MouseMove**.

* MouseMove
* Click
* DoubleClick

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs233/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs233/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs233" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs233/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs233/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs233" %}
{% endif %}

### Customization

The following properties are available in the [`tooltipSettings`](../api/maps/tooltipSettingsModel/) to customize the tooltip of the Maps component.

* [`border`](../api/maps/tooltipSettingsModel/#border) - To customize the color, width and opacity of the border of the tooltip in layers, markers, and bubbles of Maps.
* [`fill`](../api/maps/tooltipSettingsModel/#fill) - Applies the color of the tooltip in layers, markers, and bubbles of Maps.
* [`format`](../api/maps/tooltipSettingsModel/#format) - To customize the format of the tooltip in layers, markers, and bubbles of Maps
* [`textStyle`](../api/maps/tooltipSettingsModel/#textstyle) - To customize the style of the text in the tooltip for layers, markers, and bubbles of Maps.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs234/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs234/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs234" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs234/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs234/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs234" %}
{% endif %}

### Tooltip template

The HTML element can be rendered in the tooltip of the Maps using the [`template`](../api/maps/tooltipSettingsModel/#template) property of the [`tooltipSettings`](../api/maps/tooltipSettingsModel/). In the following example, ${value1} and ${value2} are the place holders in the HTML element to display the value1 and value2 values of the corresponding shape.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/tooltip-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/tooltip-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/tooltip-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/tooltip-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/tooltip-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/tooltip-template-cs3" %}
{% endif %}

## See Also

* [Center position zooming](../maps/how-to/zooming)
* [Tooltip for marker](../maps/how-to/marker-type)
* [Navigating to particular country](../maps/how-to/navigation-line)