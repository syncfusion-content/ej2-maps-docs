---
layout: post
title: Populate data in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Populate data in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Populate data 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Populate data in ##Platform_Name## Maps control

## Shape data

The shape data collection describes geographical shape information that is available in GeoJSON format. The Map shapes are rendered with this data. The custom shapes such as seat selection in bus, seat selection in a cricket stadium and more useful information can be also added as [`shapeData`](../api/maps/layerSettingsModel/#shapedata) in the layer of the Maps.

```ts
export let usMap = //Paste all the content copied from the JSON file.
```

## Data source

The [`dataSource`](../api/maps/layerSettingsModel/#datasource) property is used to represent statistical data in the Maps component, and it accepts a collection of values as input. For example, a list of objects as input can be provided to the data source. This data source will be used to color the map, display data labels, and display tooltip, among other things.

The data source is populated with JSON data relative to shape data and stored as JSON object. In the below example, **populationData** can be used as data source in Maps.

```ts
export let populationData: object[] = [
    {
        'code': 'AF',
        'value': 53,
        'name': 'Afghanistan',
        'population': 29863010,
        'density': 119
    },
    {
        'code': 'AL',
        'value': 117,
        'name': 'Albania',
        'population': 3195000,
        'density': 111
    },
    {
        'code': 'DZ',
        'value': 15,
        'name': 'Algeria',
        'population': 34895000,
        'density': 15
    },
    {
        'code': 'AO',
        'value': 15,
        'name': 'Angola',
        'population': 18498000,
        'density': 15
    },
    {
        'code': 'AR',
        'value': 15,
        'name': 'Argentina',
        'population': 40091359,
        'density': 14
    },
    {
        'code': 'AM',
        'value': 109,
        'name': 'Armenia',
        'population': 3230100,
        'density': 108
    }
];
```

## Data binding

The following properties in the [`layers`](../api/maps/layerSettingsModel/) are used for binding data in the Maps control. Both the properties are related to each other.

* shapePropertyPath
* shapeDataPath

### shapePropertyPath

The [`shapePropertyPath`](../api/maps/layerSettingsModel/#shapepropertypath) property is used to refer the field name in the [`shapeData`](../api/maps/layerSettingsModel/#shapedata) property of shape layers to identify the shape. When the values of [`shapeDataPath`](../api/maps/layerSettingsModel/#shapedatapath) property from the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property and [`shapePropertyPath`](../api/maps/layerSettingsModel/#shapepropertypath) property from the [`shapeData`](../api/maps/layerSettingsModel/#shapedata) property match, then the associated object from the data source is bound to the corresponding shape.

>`world-map.ts` file contains following data and its field **name** value is used to map the corresponding shape with the provided data source.

```ts
export let world_map: object = {
    "type": "Feature",
    "properties": {
        "admin": "Afghanistan",
        "name": "Afghanistan",
        "continent": "Asia"
    },
    "geometry": { "type": "Polygon", "coordinates": [[[61.21081709172573, ... },
...

```

### shapeDataPath

The [`shapeDataPath`](../api/maps/layerSettingsModel/#shapedatapath) property is similar to the [`shapePropertyPath`](../api/maps/layerSettingsModel/#shapepropertypath) property, but it refers to the field name in the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property. For example, [populationData](#data-source) contains the **code**, **value**, **name**, **population** and **density** fields. Here, the **name** field is set to the shapeDataPath to map the corresponding value of field name in shape data.

In the below example, both **name** fields contain the same value as **Afghanistan**, this value is matched in both shape data and data source, so that the details associated with **Afghanistan** will be mapped to the corresponding shape and used to color the corresponding shape, display data labels, display tooltips, and more.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs138/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs138/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs138" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs138/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs138/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs138" %}
{% endif %}

## Binding complex data source

Data from data source can be bind to the Maps in two different ways.

1. Bind the field name directly to the properties as [`shapeDataPath`](../api/maps/layerSettingsModel/#shapedatapath), [`colorValuePath`](../api/maps/markerSettingsModel/#colorvaluepath),
[`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) and [`shapeValuePath`](../api/maps/markerSettingsModel/#shapevaluepath).

2. Bind the field name as `data.field` to the properties as [`shapeDataPath`](../api/maps/layerSettingsModel/#shapedatapath), [`colorValuePath`](../api/maps/markerSettingsModel/#colorvaluepath),
[`valuePath`](../api/maps/tooltipSettingsModel/#valuepath) and [`shapeValuePath`](../api/maps/markerSettingsModel/#shapevaluepath).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs139/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs139/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs139" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs139/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs139/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs139" %}
{% endif %}