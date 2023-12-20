---
layout: post
title: Polygon in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Polygon in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Polygon 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Polygon shape in ##Platform_Name## Maps control

The Maps control allows you to add polygon shape to a geometry map or an online map by using the properties in the [polygons](../api/maps/polygonSettingModel/). This section describes how to add polygon shape to the map and customize them. To render Polygon in Maps, **Polygon** module must be injected into the Maps using **Maps.Inject(Polygon)** method.

The polygon shape can be rendered over the map layer by defining the [points](../api/maps/polygonSettingModel/#points) property in the `polygons` of the Maps control. The `points` property uses a collection of latitude and longitude values to define the polygon shape.

The `polygons` provides the following properties for customizing the polygon shape of the Maps component.

* [fill](../api/maps/polygonSettingModel/#fill) - It is used to change the color of the polygon shape.
* [opacity](../api/maps/polygonSettingModel/#opacity) - It is used to change the opacity of the polygon shape.
* [borderColor](../api/maps/polygonSettingModel/#bordercolor) - It is used to change the color of the border in the polygon shape.
* [borderWidth](../api/maps/polygonSettingModel/#borderwidth) - It is used to change the width of the border in the polygon shape.
* [borderOpacity](../api/maps/polygonSettingModel/#borderopacity) - It is used to change the opacity of the border in the polygon shape.

You can also include “n” polygon shapes inside the [polygonSettings](../api/maps/polygonSettingsModel/) property.

The following example shows how to customize the polygon shape over the geometry map.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/polygon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs1" %}