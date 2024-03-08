---
layout: post
title: Polygon in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Data label in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Polygon 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Polygon shape in ##Platform_Name## Maps control

The Maps control allows you to add polygon shape to a geometry map or an online map by using the properties in the [polygons](../api/maps/polygonSettingsModel/#polygons). This section describes how to add polygon shape to the map and customize them.

The polygon shape can be rendered over the map layer by defining the [points](../api/maps/polygonSettingModel/#points) property in the `polygons` of the Maps control. The `points` property uses a collection of latitude and longitude values to define the polygon shape.

The `polygons` provides the following properties for customizing the polygon shape of the Maps control.

* [fill](../api/maps/polygonSettingModel/#fill) - It is used to change the color of the polygon shape.
* [opacity](../api/maps/polygonSettingModel/#opacity) - It is used to change the opacity of the polygon shape.
* [borderColor](../api/maps/polygonSettingModel/#bordercolor) - It is used to change the color of the border in the polygon shape.
* [borderWidth](../api/maps/polygonSettingModel/#borderwidth) - It is used to change the width of the border in the polygon shape.
* [borderOpacity](../api/maps/polygonSettingModel/#borderopacity) - It is used to change the opacity of the border in the polygon shape.

> You can also include “n” polygon shapes using the [polygons](../api/maps/polygonSettingsModel/#polygons) property.

The following example shows how to customize the polygon shape over the geometry map.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/polygon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs1" %}

## Tooltip for polygon

Tooltip is used to display more information about a polygon shape on mouse over or touch end event. This can be enabled by setting the [`visible`](../api/maps/tooltipSettingsModel/#visible) property to **true** in the  [`tooltipSettings`](../api/maps/tooltipSettingsModel). Additonally, you need to set the [`tooltipText`](../api/maps/polygonSettingsModel/#tooltiptext) property in the [`polygonSettings`](../api/maps/polygonSettingsModel) to show the tooltip text separately for each polygon shape, if you add 'n' numbers of polygon shapes.

### Tooltip customization

The following properties are available in the [`tooltipSettings`](../api/maps/tooltipSettingsModel/) to customize the tooltip of the Maps component.

* [`border`](../api/maps/tooltipSettingsModel/#border) - To customize the color, width and opacity of the border of the tooltip in the polygon shape.
* [`fill`](../api/maps/tooltipSettingsModel/#fill) - Applies the color of the tooltip in the polygon shape.
* [`textStyle`](../api/maps/tooltipSettingsModel/#textstyle) - To customize the style of the text in the tooltip for the polygon shape.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/polygon-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs4" %}

### Tooltip template

The HTML element can be rendered in the tooltip of the Maps using the [`tooltipTemplate`](../api/maps/tooltipSettingsModel/#template) property of the [`polygonSettings`](../api/maps/tooltipSettingsModel/).  If you add 'n' numbers of polygon shapes, you may add the `tooltipTemplate` property to each polygon group, which will display the tooltip data for the associated polygon shape.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/polygon-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/polygon-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs5" %}


