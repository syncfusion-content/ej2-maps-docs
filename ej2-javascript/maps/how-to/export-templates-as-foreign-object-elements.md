---
layout: post
title: Export with Templates in ##Platform_Name## Maps control | Syncfusion
description: Learn how to export Maps with Templates in the Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Maps 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Export with Templates in ##Platform_Name## Maps control

Maps has template support for marker, data label and tooltip, as well as annotation that is similar to template. We will demonstrate how to export a marker template in the following example. In a similar way, you can export the data label template, tooltip template and annotation.

First, Maps does not support exporting with a marker template. This is because the marker template functionality is intended to render any HTML elements, such as text, tables, images, or custom HTML design, on top of the Maps. Because Maps is an SVG component, the marker templates are positioned above the SVG element in the top, left, bottom, and right positions. As a result, when exporting, the marker templates must be placed in the **foreignObject** element of the SVG and positioned using CSS styles. However, it is not supported by all web browsers. As a workaround, we can achieve the desired result in the sample application itself.

> The Maps with marker template, data label template, tooltip template and annotation can be exported in **PNG**, **JPEG**, and **PDF** formats.

## Export Shape Maps with Template

The following code example will show you how to export a shape Maps with marker template. You can also use this format to frame and make other templates and annotation work.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/how-to/shape-map-with-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/shape-map-with-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/how-to/shape-map-with-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/how-to/shape-map-with-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/shape-map-with-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/how-to/shape-map-with-template-cs3" %}
{% endif %}

## Export OSM Maps with Template

The following code example will show you how to export an OSM Maps with marker template. You can also use this format to frame and make other templates and annotation work.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/how-to/osm-map-with-template-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/osm-map-with-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/how-to/osm-map-with-template-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/how-to/osm-map-with-template-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/osm-map-with-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/how-to/osm-map-with-template-cs4" %}
{% endif %}




