---
layout: post
title: Multiple layer in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Multiple layer in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Multiple layer 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple layer in ##Platform_Name## Maps control

The multilayer support allows loading multiple shape files in a single container and enables Maps to display more information. The shape layer is the main layer of the Maps. Multiple layers can be added in a shape layer as **SubLayer** using the [`type`](../../api/maps/layerSettingsModel/#type) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs29/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs29" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs29/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs29" %}
{% endif %}
