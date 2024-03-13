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

The Maps control allows you to add polygon shape to a geometry map or an online map by using the properties in the [polygons](../api/maps/polygonSettingsModel/#polygons). This section describes how to add polygon shape to the map and customize them.

To render polygon shapes in Maps, **Polygon** module must be injected into the Maps using `Maps.Inject(Polygon)` method. The polygon shape can be rendered over the map layer by defining the [points](../api/maps/polygonSettingModel/#points) property in the `polygons` of the Maps control. The `points` property uses a collection of latitude and longitude values to define the polygon shape.

The `polygons` provides the following properties for customizing the polygon shape of the Maps control.

* [fill](../api/maps/polygonSettingModel/#fill) - It is used to change the color of the polygon shape.
* [opacity](../api/maps/polygonSettingModel/#opacity) - It is used to change the opacity of the polygon shape.
* [borderColor](../api/maps/polygonSettingModel/#bordercolor) - It is used to change the color of the border in the polygon shape.
* [borderWidth](../api/maps/polygonSettingModel/#borderwidth) - It is used to change the width of the border in the polygon shape.
* [borderOpacity](../api/maps/polygonSettingModel/#borderopacity) - It is used to change the opacity of the border in the polygon shape.

> You can also include “n” polygon shapes using the [polygons](../api/maps/polygonSettingsModel/#polygons) property.

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

## Tooltip for polygon shape

A tooltip is used to display more information about a polygon shape during a mouse or touch interaction. Tooltips and tooltip templates can be enabled by setting the [visible]() property to **true** in the [tooltipSettings](). Additionally, you need to set the desired content as a value to the [tooltipText]() property in the [polygons](../api/maps/polygonSettingModel) to show the tooltip. If you add 'n' numbers of polygon shapes, you can add the `tooltipText` property to each polygon, which will display the tooltip for the associated polygon shape.

### Tooltip customization

The following properties are available in the [tooltipSettings]() to customize the tooltip of the Maps control.

* [fill]() - Applies the color of the tooltip of the polygon shape.
* [border]() - This property is used to change the color, width and opacity of the border of the tooltip of the polygon shape.
* [textStyle]() - This property is used to change the font properties of the tooltip text of the polygon shape.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/polygon-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs4" %}

### Tooltip template

Any HTML element can be rendered in the tooltip of the polygon shapes using the [tooltipTemplate]()property of the [polygonSettings](../api/maps/polygonSettingsModel). If you add 'n' numbers of polygon shapes, you can add the `tooltipTemplate` property to each polygon, which will display the tooltip for the associated polygon shape.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/polygon-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs5" %}
