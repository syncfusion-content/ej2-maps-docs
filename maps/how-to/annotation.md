---
layout: post
title: Annotation in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Annotation in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Annotation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in ##Platform_Name## Maps control

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

Initialize the Maps control with annotation option, text content or ID of an HTML element or an HTML string can be specified to render a new element that needs to be displayed in the Maps by using the [`content`](../../api/maps/annotationModel/#content) property. To specify the content position with [`x`](../../api/maps/annotationModel/#x) and [`y`](../../api/maps/annotationModel/#y) properties as mentioned in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs25" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs25" %}
{% endif %}

```
    <svg height="150" width="400">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#C5494B;stop-opacity:1"></stop>
                <stop offset="100%" style="stop-color:#4C134F;stop-opacity:1"></stop>
            </linearGradient>
        </defs>
    </svg>
    <div id="maps-annotation" style="display: none;">
        <div id="annotation">
            <div>
                <p style="margin-left:10px;font-size:13px;font-weight:500">Facts about Africa</p>
            </div>
            <hr style="margin-top:-3px;margin-bottom:10px;border:0.5px solid #DDDDDD">
            <div>
                <ul style="list-style-type:disc; margin-left:-20px;margin-bottom:2px; font-weight:400">
                    <li>Africa is the second largest and second most populated continent in the world.</li>
                    <li style="padding-top:5px;">Africa has 54 sovereign states and 10 non-sovereign territories.
                    </li>
                    <li style="padding-top:5px;">Algeria is the largest country in Africa, where as Mayotte is the smallest.</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="compass-maps" style="display: none;">
        <img src="templates/maps/how-to/annotation/compass.png" height="75px" width="75px">
    </div>
    <style>
        #annotation {
            color: #DDDDDD;
            font-size: 12px;
            font-family: Roboto;
            background: #3E464C;
            margin: 20px;
            padding: 10px;
            border-radius: 2px;
            width: 300px;
            box-shadow: 0px 2px 5px #666;
        }
    </style>
```