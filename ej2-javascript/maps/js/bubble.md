---
layout: post
title: Bubble in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Bubble in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Bubble 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Bubble in ##Platform_Name## Maps control

Bubbles in the Maps control represent the underlying data values of the Maps. It can be scattered throughout the Maps shapes that contain values in the data source. Bubbles are enabled by setting the [`visible`](../api/maps/bubbleSettingsModel/#visible) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **true**.

To add bubbles to the Maps, bind the data source to the [`dataSource`](../api/maps/bubbleSettingsModel/#datasource) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) and set the field name, that contains the numerical data, in the data source to the [`valuePath`](../api/maps/bubbleSettingsModel/#valuepath) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs35/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs35" %}

## Bubble shapes

The following types of shapes are available to render the bubbles in Maps.

* Circle
* Square

By default, bubbles are rendered in the **Circle** type. To change the type of the bubble, set the [`bubbleType`](../api/maps/bubbleSettingsModel/#bubbletype) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) as **Square** to render the square shape bubbles.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs36/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs36/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs36" %}

## Customization

The following properties are available in [`bubbleSettings`](../api/maps/bubbleSettingsModel) to customize the bubbles of the Maps component.

* [`border`](../api/maps/bubbleSettingsModel/#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](../api/maps/bubbleSettingsModel/#fill) – To apply the color for bubbles in Maps.
* [`opacity`](../api/maps/bubbleSettingsModel/#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](../api/maps/bubbleSettingsModel/#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](../api/maps/bubbleSettingsModel/#animationduration) - To change the time duration of animation for bubbles.
* [`highlightSettings`](../api/maps/bubbleSettingsModel/#highlightsettings) - To customize the highlight settings for the bubbles in Maps.
* [`selectionSettings`](../api/maps/bubbleSettingsModel/#selectionsettings) - To customize the selection settings for the bubbles in Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs37/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs37" %}

## Setting color to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](../api/maps/bubbleSettingsModel/#colorvaluepath) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](../api/maps/bubbleSettingsModel/#colorvaluepath) property is the field name from the data source of the [`bubbleSettings`](../api/maps/bubbleSettingsModel) which contains the color values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs38/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs38/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs38" %}

## Bubble sizing

The size of the bubbles is calculated from the values got from the [`valuePath`](../api/maps/bubbleSettingsModel/#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](../api/maps/bubbleSettingsModel/#minradius) and [`maxRadius`](../api/maps/bubbleSettingsModel/#maxradius) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs39" %}

## Multiple bubble groups

Multiple groups of bubbles can be added to the Maps using the [`bubbleSettings`](../api/maps/bubbleSettingsModel) in which the properties of bubbles are added as an array. The customization for the bubbles can be done with the [`bubbleSettings`](../api/maps/bubbleSettingsModel). In the following example, the gender-wise population ratio is demonstrated with two different bubble groups.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs40" %}

## Enable tooltip for bubble

The tooltip for the bubbles can be enabled by setting the [`visible`](../api/maps/tooltipSettingsModel/#visible) property of the [`tooltipSettings`](../api/maps/tooltipSettingsModel) as **true**. The content for the tooltip can be set using the [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property in the [`tooltipSettings`](../api/maps/tooltipSettingsModel) of the [`bubbleSettings`](../api/maps/bubbleSettingsModel) where the value for the [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property is the field name from the data source of the [`bubbleSettings`](../api/maps/bubbleSettingsModel). Also added any HTML element as the template in tooltip using the [`template`](../api/maps/tooltipSettingsModel/#template) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs41/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs41" %}