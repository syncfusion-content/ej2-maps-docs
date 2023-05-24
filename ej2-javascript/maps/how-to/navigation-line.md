---
layout: post
title: Navigation line in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Navigation line in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Navigation line 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Navigation line in ##Platform_Name## Maps control

To navigate a particular country by setting the center position zooming using the [`centerPosition`](../../api/maps/#centerposition/) and [`zoomFactor`](../../api/maps/zoomSettings/#zoomfactor) property as demonstrated in the following sample. The center position is used to configure the zoom level of maps, and zoom factor is used to specify the center position where the map should be displayed.

To navigate to a particular country, follow the given steps:

**Step 1**:

Initialize the maps and add country list for drop-down elements in the load event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/how-to/navigate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/navigate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/how-to/navigate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/how-to/navigate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/navigate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/how-to/navigate-cs1" %}
{% endif %}

**Step 2**:

Set the center position latitude and longitude as latitude and longitude of selected country by drop-downs, and then set the `zoomFactor` to navigate to the particular selected country.

To refresh the maps, invoke the `refresh` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/how-to/navigate-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/navigate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/how-to/navigate-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/how-to/navigate-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/how-to/navigate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/how-to/navigate-cs2" %}
{% endif %}