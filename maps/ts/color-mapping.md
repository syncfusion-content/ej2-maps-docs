---
layout: post
title: Color mapping in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Color mapping in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Color mapping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Color mapping in ##Platform_Name## Maps control

Color mapping is used to customize the shape colors based on given values. It has three types: range color mapping, equal color mapping and desaturation color mapping. To add color mapping to the shapes of the Maps, bind the data source to the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel) and set the field name which contains the color value in the data source to the [`colorValuePath`](../api/maps/shapeSettingsModel/#colorvaluepath) property.

## Range color mapping

Range color mapping applies the color to the shapes of the Maps which matches the numeric values in the data source within the given color mapping ranges. The [`from`](../api/maps/colorMappingSettingsModel/#from) and [`to`](../api/maps/colorMappingSettingsModel/#to) properties in the [`colorMapping`](../api/maps/colorMappingSettingsModel/) are used to specify the color mapping ranges in the Maps.

Bind the **Population_Density** data to the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel/) and set the [`colorValuePath`](../api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel/) as **density** and set the range values using the [`from`](../api/maps/colorMappingSettingsModel/#from) and [`to`](../api/maps/colorMappingSettingsModel/#to) properties of [`colorMapping`](../api/maps/colorMappingSettingsModel/).

```ts
export let population_density = [
    ...
    {
        'code': 'AE',
        'value': 90,
        'name': 'United Arab Emirates',
        'population': 8264070,
        'density': 99
    },
    {
        'code': 'GB',
        'value': 257,
        'name': 'United Kingdom',
        'population': 62041708,
        'density': 255
    },
    {
        'code': 'US',
        'value': 34,
        'name': 'United States',
        'population': 325020000,
        'density': 33
    }
    ...
    ];
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs151/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs151/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs151" %}

## Equal color mapping

Equal color mapping applies the color to the shapes of the Maps when the [`value`](../api/maps/colorMappingSettingsModel/#value) property of [`colorMapping`](../api/maps/colorMappingSettingsModel/) matches with the values provided in the data source.

The following example demonstrates the permanent and non-permanent countries in the UN security council, in 2017. Bind the **unCountries** data to the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel/) and set the [`colorValuePath`](../api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel/) as **Membership** and set the value to the [`value`](../api/maps/colorMappingSettingsModel/#value) property in the [`colorMapping`](../api/maps/colorMappingSettingsModel/) property. Please find the data source used in the below sample which demonstrates the permanent and non-permanent countries in the UN security council.

```ts
export let unCountries: object[] = [
{ Country: 'China', Membership: 'Permanent' },
{ Country: 'France', Membership: 'Permanent' },
{ Country: 'Russia', Membership: 'Permanent' },
{ Country: 'United Kingdom', Membership: 'Permanent' },
{ Country: 'United States', Membership: 'Permanent' },
{ Country: 'Bolivia', Membership: 'Non-Permanent' },
{ Country: 'Eq. Guinea', Membership: 'Non-Permanent' },
{ Country: 'Ethiopia', Membership: 'Non-Permanent' },
{ Country: "Côte d'Ivoire", Membership: 'Permanent' },
{ Country: 'Kazakhstan', Membership: 'Non-Permanent' },
{ Country: 'Kuwait', Membership: 'Non-Permanent' },
{ Country: 'Netherlands', Membership: 'Non-Permanent' },
{ Country: 'Peru', Membership: 'Non-Permanent' },
{ Country: 'Poland', Membership: 'Non-Permanent' },
{ Country: 'Sweden', Membership: 'Non-Permanent' },
];
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs152/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs152/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs152" %}

## Desaturation color mapping

Desaturation color mapping applies the color to the shapes of the Maps similar to the range color mapping along with the opacity based on the given values for [`minOpacity`](../api/maps/colorMappingSettingsModel/#minopacity) and [`maxOpacity`](../api/maps/colorMappingSettingsModel/#maxopacity) properties in the [`colorMapping`](../api/maps/colorMappingSettingsModel/).

The following example shows how to apply desaturation color mapping to shapes. Please refer to the **Population_Density** data source in the Range color mapping section for the below sample. Bind the **Population_Density** data to the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel/) and set the [`colorValuePath`](../api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel/) as **density** and set the range values using the [`from`](../api/maps/colorMappingSettingsModel/#from) and [`to`](../api/maps/colorMappingSettingsModel/#to) properties of [`colorMapping`](../api/maps/colorMappingSettingsModel/). The opacity of the color mapping can be set using the [`minOpacity`](../api/maps/colorMappingSettingsModel/#minopacity) and [`maxOpacity`](../api/maps/colorMappingSettingsModel/#maxopacity) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs153/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs153/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs153" %}

## Desaturation with multiple colors

Multiple colors can be added to the color mapping which can be used as gradient effect to a specific shape based on the ranges in the data source. By using the [`color`](../api/maps/colorMappingSettingsModel/#color) property of [`colorMapping`](../api/maps/colorMappingSettingsModel/), any number of colors can be set to the shapes as a gradient.

The following example demonstrates how to use multiple colors in color mapping. Please refer to the **Population_Density** data source in the Range color mapping section for the below sample. Bind the **Population_Density** data to the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](../api/maps/layerSettingsModel/) property and set the [`colorValuePath`](../api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](../api/maps/shapeSettingsModel/) as **density** and set the range values using the [`from`](../api/maps/colorMappingSettingsModel/#from) and [`to`](../api/maps/colorMappingSettingsModel/#to) properties of [`colorMapping`](../api/maps/colorMappingSettingsModel/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs154/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs154/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs154" %}

## Color for items excluded from color mapping

Color mapping can be applied to the shapes in the Maps which does not match color mapping criteria such as range or equal values using the [`color`](../api/maps/colorMappingSettingsModel/#color) property of [`colorMapping`](../api/maps/colorMappingSettingsModel/).

The following example shows how to set the color for items excluded from the color mapping. Please refer to the **Population_Density** data source in the Range color mapping section for the below sample. In the following example, color mapping is added for the ranges from 0 to 200. If the data source having any records beyond this range, the color mapping will not be applied. To apply the color for these excluded items, set the [`color`](../api/maps/colorMappingSettingsModel/#color) property alone in the [`colorMapping`](../api/maps/colorMappingSettingsModel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs155/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs155/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs155" %}

## Color mapping for bubbles

The color mapping types such as range color mapping, equal color mapping and desaturation color mapping are applicable for bubbles in the Maps. To add color mapping for bubbles of the Maps, bind the data source to the [`dataSource`](../api/maps/bubbleSettingsModel/#datasource) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) and set the field name which contains the color value in the data source to the [`colorValuePath`](../api/maps/bubbleSettingsModel/#colorvaluepath).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs156/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs156/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs156" %}