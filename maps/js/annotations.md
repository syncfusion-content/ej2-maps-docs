---
layout: post
title: Annotations in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Annotations in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Annotations 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in ##Platform_Name## Maps control

<!-- markdownlint-disable MD013 -->

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

## Annotation

By using the [`content`](../api/maps/annotationModel/#content) property of [`annotation`](../api/maps/annotationModel), text content or id of an element or an HTML string can be specified to render a new HTML element in Maps.

<!-- markdownlint-disable MD036 -->

 ```
<script id='annotation' type="text/x-template">
    <div id='template'>
        <img src='src/maps/images/flight.png'>
    </div>
</script>

```

```ts

var maps = new ej.maps.Maps({
    annotations: [
        {
            content: '#annotation',
            x: '0%', y: '50%'
        }
    ],
    layers: [
        {
            shapeData: world_map,
        }
    ]
});
maps.appendTo('#element');

```

## Annotation customization

### Changing the z-index

The stack order of an annotation element can be changed using the [`zIndex`](../api/maps/annotationModel/#zindex) property in the [`annotation`](../api/maps/annotationModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs31/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs31" %}

<!-- markdownlint-disable MD036 -->

### Positioning an Annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](../api/maps/annotationModel/#x) and [`y`](../api/maps/annotationModel/#y) properties in the [`annotation`](../api/maps/annotationModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs32/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs32/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs32" %}

<!-- markdownlint-disable MD036 -->

### Alignment of an Annotation

Annotations can be aligned using the [`horizontalAlignment`](../api/maps/annotationModel/#horizontalalignment) and [`verticalAlignment`](../api/maps/annotationModel/#verticalalignment) properties in the [`annotation`](../api/maps/annotationModel). The possible values can be **Center**, **Far**, **Near** and **None**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs33/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs33" %}

## Multiple Annotation

Multiple annotations can be added to the Maps using the [`annotations`](../api/maps/annotationModel) and customization for the annotations can be done with this property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs34/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs34/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs34" %}