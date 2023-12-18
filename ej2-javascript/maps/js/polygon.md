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

The Maps control allows you to add polygon shape to a geometry map or an online map by using the properties in the [polygonSettings](). This section describes how to add polygon shape to the map and customize them.

The polygon shape can be rendered over the map layer by defining the [points]() property in the [polygonSettings]() in the Maps control. The `points`` property uses a collection of latitude and longitude values to define the polygon shape.

The `polygonSettings` provides the following properties for customizing the polygon shape of the Maps component.

* [fill]() - It is used to change the color of the polygon shape.
* [opacity]() - It is used to change the opacity of the polygon shape.
* [borderColor]() - It is used to change the color of the border in the polygon shape.
* [borderWidth]() - It is used to change the width of the border in the polygon shape.
* [borderOpacity]() - It is used to change the opacity of the border in the polygon shape.

You can also include “n” polygon shapes inside the `polygonSettings` property.

The following example shows how to customize the polygon shape over the geometry map.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs53/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs53/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs53" %}
