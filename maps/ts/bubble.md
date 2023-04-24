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

Bubbles in the Maps control represent the underlying data values of the map. It can be scattered throughout the map shapes that contain values in the data source. Bubbles are enabled by setting the [`visible`](../api/maps/bubbleSettingsModel/#visible) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **true**. To render bubble in Maps, **Bubble** module must be injected into Maps using **Maps.Inject(Bubble)** method.

```ts
import { Maps, Bubble } from '@syncfusion/ej2-maps';
Maps.Inject(Bubble);
let map: Maps = new Maps({ });
```

To add bubbles to the map, bind the data source to the [`dataSource`](../api/maps/bubbleSettingsModel/#datasource) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) and set the field name, that contains the numerical data, in the data source to the [`valuePath`](../api/maps/bubbleSettingsModel/#valuepath) property.

```ts
export let world_map = // paste the World map from WorldMap.json Geo json file.
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs144/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs144/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs144" %}

## Bubble shapes

The following types of shapes are available to render the bubbles in Maps.

* Circle
* Square

By default, bubbles are rendered in **Circle** type. To change the type of the bubble, set the [`bubbleType`](../api/maps/bubbleSettingsModel/#bubbletype) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) as **Square** to render the square shape bubbles.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs145/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs145/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs145" %}

## Customization

The following properties are available in [`bubbleSettings`](../api/maps/bubbleSettingsModel) to customize the bubbles of the Maps component.

* [`border`](../api/maps/bubbleSettingsModel/#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](../api/maps/bubbleSettingsModel/#fill) – To apply the color for bubbles in Maps.
* [`opacity`](../api/maps/bubbleSettingsModel/#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](../api/maps/bubbleSettingsModel/#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](../api/maps/bubbleSettingsModel/#animationduration) - To change the time duration of animation for bubbles.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs146/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs146/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs146" %}

## Setting color to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](../api/maps/bubbleSettingsModel/#colorvaluepath) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](../api/maps/bubbleSettingsModel/#colorvaluepath) property is the field name from the data source of the [`bubbleSettings`](../api/maps/bubbleSettingsModel) which contains the color code values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs147/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs147/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs147" %}

## Bubble Sizing

The size of the bubbles is calculated from the values got from the [`valuePath`](../api/maps/bubbleSettingsModel/#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](../api/maps/bubbleSettingsModel/#minradius) and [`maxRadius`](../api/maps/bubbleSettingsModel/#maxradius) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs148/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs148/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs148" %}

## Multiple bubble groups

Multiple groups of bubbles can be added as an array using the [`bubbleSettings`](../api/maps/bubbleSettingsModel) and customization for the bubbles can be done with this property. In the following example, the gender-wise population ratio is demonstrated with two different bubble groups.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs149/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs149/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs149" %}

## Enable tooltip for bubble

The tooltip for the bubbles can be enabled by setting the [`visible`](../api/maps/tooltipSettingsModel/#visible) property of the [`tooltipSettings`](../api/maps/tooltipSettingsModel) as **true**. **MapsTooltip** module must be injected into the Maps using the **Maps.Inject(MapsTooltip)** method to enable the tooltip in bubbles. The content for the tooltip can be set using the [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property in the [`tooltipSettings`](../api/maps/tooltipSettingsModel) of the [`bubbleSettings`](../api/maps/bubbleSettingsModel) where the value for the [`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) property is the field name from the data source of the [`bubbleSettings`](../api/maps/bubbleSettingsModel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs150/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs150/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs150" %}