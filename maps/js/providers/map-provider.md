---
layout: post
title: Map provider in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Map provider in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Map provider 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Map provider in ##Platform_Name## Maps control

The OpenStreetMap (OSM) is the online Maps provider built by a community of developers; it is free to use under an open license. It allows to view geographical data in a collaborative way from anywhere on the earth. The OSM Maps provides small tile images based on our requests and combines those images into a single image to display the Maps area in the Maps component.

## Adding OpenStreetMap

The OSM Maps can be rendered using the [urlTemplate](../../api/maps/layerSettingsModel/#urltemplate) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/Providers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/Providers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/Providers-cs1" %}

### Changing the tile server of the OpenStreetMap

The OSM tile server can be changed by setting the tile URL in the [urlTemplate](../../api/maps/layerSettingsModel/#urltemplate) property. For more details about the OSM tile server, refer [here](https://wiki.openstreetmap.org/wiki/Tiles).

## Enabling zooming and panning

The OSM Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a Maps for in-depth analysis. Panning helps to move a Maps around to focus the targeted area.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/Providers-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/Providers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/Providers-cs2" %}

## Adding markers and navigation line

Markers can be added to the layers of OSM Maps by setting the corresponding location's coordinates of latitude and longitude using [markerSettings](../../api/maps/layerSettingsModel/#markersettings). Navigation lines can be added on top of an OSM Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [navigationLineSettings](../../api/maps/layerSettingsModel/#navigationlinesettings).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/Providers-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/Providers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/Providers-cs3" %}

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the OSM Maps layer for highlighting a particular continent or country in OSM Maps by adding another layer and specifying the [type](../../api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs94/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs94/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs94" %}

## Enabling legend

The legend can be added to the tile Maps by setting the [visible](../../api/maps/legendSettingsModel/#visible) property of [legendSettings](../../api/maps/legendSettingsModel) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs95/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs95/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs95" %}