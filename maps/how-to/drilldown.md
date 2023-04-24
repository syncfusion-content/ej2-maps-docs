---
layout: post
title: Drilldown in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Drilldown in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drilldown 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown in ##Platform_Name## Maps control

By clicking a continent, all the countries available in that continent can be viewed using the drill-down feature. For example, the countries in the `Africa` continent have been showcased here. To showcase all the countries in `Africa` continent by clicking the [`shapeSelected`](../../api/maps/#shapeselected) event as mentioned in the following example.

<!-- markdownlint-disable MD031 -->
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs26" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs26" %}
{% endif %}

```
<div id="mapdrilldown"></div>
  <style>
     .markerTemplate {
        font-size: 12px;
        color: white;
        text-shadow: 0px 1px 1px black;
        font-weight: 500
    }
    .markerTemplate {
        height: 30px;
        width: 30px;
        display: block;
        margin: auto;
    }
  </style>
```