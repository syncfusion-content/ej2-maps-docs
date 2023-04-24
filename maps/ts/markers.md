---
layout: post
title: Markers in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Markers in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Markers 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Markers in ##Platform_Name## Maps control

Markers are notes that are used to leave a message on the Maps. It indicates or marks a specific location with desired symbols on the Maps. It can be enabled by setting the [`visible`](../api/maps/markerSettingsModel/#visible) property of the [`markerSettings`](../api/maps/markerSettingsModel/) to **true**. To render Markers in Maps, **Marker** module must be injected into the Maps using **Maps.Inject(Marker)** method.

```ts
import { Maps, Marker } from '@syncfusion/ej2-maps';
Maps.Inject(Marker);
let map: Maps = new Maps({ });
```

## Adding marker

The [`dataSource`](../api/maps/markerSettingsModel/#datasource) property of the [`markerSettings`](../api/maps/markerSettingsModel/) has a list of objects that contains the data for Markers. Using this property, any number of markers can be added to the shape layers. By default, it displays the markers based on the specified latitude and longitude in the given data source. Each data source object contains the following list of properties.

* label - Text that displays some information about the marker in text format.
* latitude - The latitude point which determines the X location of the marker.
* longitude - The longitude point which determines the Y location of the marker.

>markerSettings is an Array property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs192/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs192/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs192" %}

## Adding marker template

The Marker can be added as a template in the Maps component. The [`template`](../api/maps/markerSettingsModel/#template) property of the [`markerSettings`](../api/maps/markerSettingsModel/) is used to set the Marker as a template. HTML element or id of an element can be added as the template in Markers.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs193/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs193/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs193" %}

## Customization

The following properties are available in [`markerSettings`](../api/maps/markerSettingsModel/) to customize the Markers of the Maps component.

* [`border`](../api/maps/markerSettingsModel/#border) - To customize the color, width and opacity of the border for the markers in Maps.
* [`fill`](../api/maps/markerSettingsModel/#fill) - To apply the color for markers in Maps.
* [`dashArray`](../api/maps/markerSettingsModel/#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the markers in Maps.
* [`height`](../api/maps/markerSettingsModel/#height) - To customize the height of the markers in Maps.
* [`width`](../api/maps/markerSettingsModel/#width) - To customize the width of the markers in Maps.
* [`offset`](../api/maps/markerSettingsModel/#offset) - To customize the position of the markers in Maps.
* [`opacity`](../api/maps/markerSettingsModel/#opacity) - To customize the transparency of the markers in Maps.
* [`animationDelay`](../api/maps/markerSettingsModel/#animationdelay) - To change the time delay in the transition for markers.
* [`animationDuration`](../api/maps/markerSettingsModel/#animationduration) - To change the time duration of animation for markers.
* [`highlightSettings`](../api/maps/markerSettingsModel/#highlightsettings) - To customize the highlight settings for the marker in Maps.
* [`selectionSettings`](../api/maps/markerSettingsModel/#selectionsettings) - To customize the selection settings for the marker in Maps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs194/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs194/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs194" %}

## Marker shapes

The Maps component supports the following marker shapes. To set the shape of the marker, the [`shape`](../api/maps/markerSettingsModel/#shape) property in [`markerSettings`](../api/maps/markerSettingsModel) is used.

* Balloon
* Circle
* Cross
* Diamond
* Image
* Rectangle
* Start
* Triangle
* VerticalLine
* HorizontalLine

## Rendering marker shape as image

To render a marker as an image in Maps, set the [`shape`](../api/maps/markerSettingsModel/#shape) property of [`markerSettings`](../api/maps/markerSettingsModel/) as **Image** and specify the path of the image to [`imageUrl`](../api/maps/markerSettingsModel/#imageurl) property. There is another way to render a marker as an image using the [`imageUrlValuePath`](../api/maps/markerSettingsModel/#imageurlvaluepath) property of the [`markerSettings`](../api/maps/markerSettingsModel/). Bind the field name that contains the path of the image in the data source to the [`imageUrlValuePath`](../api/maps/markerSettingsModel/#imageurlvaluepath) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs195/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs195/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs195" %}

## Multiple marker groups

Multiple group of markers can be added to the Maps using the [`markerSettings`](../api/maps/markerSettingsModel) in which the properties of markers are added as an array. The customization for the markers can be done with the [`markerSettings`](../api/maps/markerSettingsModel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs196/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs196/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs196" %}

## Customize marker shapes from data source

### Bind different colors and shapes to the marker from data source

Using the [`shapeValuePath`](../api/maps/markerSettingsModel/#shapevaluepath) and [`colorValuePath`](../api/maps/markerSettingsModel/#colorvaluepath) properties, apply the color and shape of the marker from the given data source. Bind the data source to the [`dataSource`](../api/maps/markerSettingsModel/#datasource) property of the [`markerSettings`](../api/maps/markerSettingsModel/) and set the field names that contains the shape and color values in the data source to the [`shapeValuePath`](../api/maps/markerSettingsModel/#shapevaluepath) and [`colorValuePath`](../api/maps/markerSettingsModel/#colorvaluepath) properties. A default marker object is represented by a **balloon** shape. To set various shapes to the marker object by using the [`shape`](../api/maps/markerSettingsModel/#shape) property in [`markerSettings`](../api/maps/markerSettingsModel/).

The following shapes are used for the marker object.

* Circle
* Rectangle
* Balloon
* Cross
* Polyline
* Diamond
* Star
* Triangle
* HorizontalLine
* VerticalLine
* pentagon

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs197/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs197/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs197" %}

### Setting value path from the data source

The latitude and longitude values are used to determine the location of each marker in the Maps. The [`latitudeValuePath`](../api/maps/markerSettingsModel/#latitudevaluepath) and [`longitudeValuePath`](../api/maps/markerSettingsModel/#longitudevaluepath) properties are used to specify the value path that presents in the data source of the marker. In the following example, the field name from the data source is set to the [`latitudeValuePath`](../api/maps/markerSettingsModel/#latitudevaluepath) and [`longitudeValuePath`](../api/maps/markerSettingsModel/#longitudevaluepath) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs198/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs198/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs198" %}

## Repositioning the marker using drag and drop

The markers on the map can be dragged and dropped to change their position. To enable marker drag and drop, set the [enableDrag](../api/maps/markerSettingsModel/#enabledrag) property to **true** in the [markerSettings](../api/maps/markerSettingsModel/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs199/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs199/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs199" %}

The data of the drag and dropped marker in the marker data source can be customized using the [markerDragStart](../api/maps/#markerdragstart) and [markerDragEnd](../api/maps/#markerdragend) events. When you change the appropriate marker data, the tooltip and legend item text of that marker are automatically updated. The following properties are available in the event argument of the marker drag events.

|   Argument Name      |   Description                               |
|----------------------| --------------------------------------------|
|   dataIndex          |   It represents the index of the data of the dragged marker in the marker data source.                          |
|   latitude           |   It represents the latitude coordinate point of the dragged marker.                                            |
|   longitude          |   It represents the longitude coordinate point for the dragged marker.                                          |
|   markerIndex        |   It represents the index of the marker setting.                                                                |
|   layerIndex         |   It represents the index of the layer in which the marker belongs.                                             |
|   name               |   It represents the name of the event.                                                                          |
|   x                  |   It represents the horizontal location of the mouse pointer on the map when the drag action is performed.      |
|   y                  |   It represents the vertical location of the mouse pointer on the map when the drag action is performed.        |

The following example shows how to use marker drag events to customize the data of the drag and dropped marker in the marker data source.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs200/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs200/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs200" %}

## Marker zooming

The Maps is initially scaled to the center value based on the marker distance. This can be achieved by setting the [`shouldZoomInitially`](../api/maps/zoomSettingsModel/#shouldzoominitially) property in [`zoomSettings`](../api/maps/zoomSettingsModel/) as **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs201/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs201/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs201" %}

## Marker clustering

Maps provide support to hide and cluster markers when they overlap each other. The number on a cluster indicates how many overlapped markers it contains. If zooming any of the cluster locations in Maps, the number on the cluster will decrease and begin to see the individual markers on the map. When zooming out, the overlapping marker will increase so that it can cluster again and increase the count over the cluster.

To enable clustering in markers, set the [`allowClustering`](../api/maps/markerClusterSettingsModel/#allowclustering) property of [`markerClusterSettings`](../api/maps/markerClusterSettingsModel) as **true** and customization of clustering can be done with the [`markerClusterSettings`](../api/maps/markerClusterSettingsModel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs202/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs202/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs202" %}

## Customization of marker cluster

The following properties are available to customize the marker clustering in the Maps component.

* [`border`](../api/maps/markerClusterSettingsModel/#border) - To customize the color, width and opacity of the border of cluster in Maps.
* [`connectorLineSettings`](../api/maps/connectorLineSettingsModel/) - To customize the connector line in cluster separating the markers.
* [`dashArray`](../api/maps/markerClusterSettingsModel/#dasharray) - To customize the dash array for the marker cluster in Maps.
* [`fill`](../api/maps/markerClusterSettingsModel/#fill) - Applies the color of the cluster in Maps.
* [`height`](../api/maps/markerClusterSettingsModel/#height) - To customize the height of the marker cluster in Maps.
* [`imageUrl`](../api/maps/markerClusterSettingsModel/#imageurl) - To customize the URL path for the marker cluster when the cluster shape is set as image in Maps.
* [`labelStyle`](../api/maps/markerClusterSettingsModel/#labelstyle) - To customize the text in marker cluster.
* [`offset`](../api/maps/markerClusterSettingsModel/#offset) - To customize the offset position for the marker cluster in Maps.
* [`opacity`](../api/maps/markerClusterSettingsModel/#opacity) - To customize the opacity of the marker cluster.
* [`shape`](../api/maps/markerClusterSettingsModel/#shape) - To customize the shape for the cluster of markers.
* [`width`](../api/maps/markerClusterSettingsModel/#width) - To customize the width of the marker cluster in Maps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs203/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs203/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs203" %}

## Marker cluster expand

The cluster is formed by grouping an identical and non-identical marker from the surrounding area. By clicking on the cluster and setting the [`allowClusterExpand`](../api/maps/markerClusterSettingsModel/#allowclusterexpand) property in [`markerClusterSettings`](../api/maps/markerClusterSettingsModel) as **true** to expand the identical markers. If zoom in any of the locations of the cluster, the number on the cluster will decrease and the overlapping marker will be split into an individual marker on the map. When performing zoom out, it will increase the marker count and then cluster it again.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs204/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs204/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs204" %}

## Tooltip for marker

Tooltip is used to display more information about a marker on mouse over or touch end event. This can be enabled separately for marker by setting the [`visible`](../api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel) to **true**. The [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property in the [`tooltipSettings`](../api/maps/tooltipSettingsModel) takes the field name that presents in data source and displays that value as tooltip text.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs205/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs205/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs205" %}

## See Also

* [Add different types of markers](../maps/how-to/marker-type)
