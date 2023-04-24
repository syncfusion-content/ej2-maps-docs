---
layout: post
title: Customization in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Customization in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in ##Platform_Name## Maps control

## Setting the size for Maps

The width and height of the Maps can be set using the [width](../api/maps/mapsModel/#width) and [height](../api/maps/mapsModel/#height) properties in the Maps control. Percentage or pixel values can be used for the height and width values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs18" %}
{% endif %}

## Maps title

The title for the Maps can be set using the [titleSettings](../api/maps/titleSettingsModel). It can be customized using the following properties.

* [alignment](../api/maps/titleSettingsModel/#alignment) - To customize the alignment for the text in the title for the Maps. The possible values are **Center**, **Near** and **Far**.
* [description](../api/maps/titleSettingsModel/#description) - To set the description of the title in Maps.
* [text](../api/maps/titleSettingsModel/#text) - To set the text for the title in Maps.
* [textStyle](../api/maps/titleSettingsModel/#textstyle) - To customize the text of the title in Maps.
* [subtitleSettings](../api/maps/titleSettingsModel/#subtitlesettings) - To customize the subtitle for the Maps.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs19" %}
{% endif %}

## Setting theme

The Maps control supports following themes.

* Material
* Fabric
* Bootstrap
* Highcontrast
* MaterialDark
* FabricDark
* BootstrapDark
* Bootstrap4
* HighContrastLight
* Tailwind

By default, the Maps are rendered by the **Material** theme. The theme of the Maps component is changed using the [theme](../api/maps/#theme) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/map-theme-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/map-theme-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/map-theme-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/map-theme-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/map-theme-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/map-theme-cs1" %}
{% endif %}

## Customizing Maps container

The following properties are available to customize the container in the Maps.

* [background](../api/maps/mapsModel/#background) - To apply the background color to the container in the Maps.
* [border](../api/maps/mapsModel/#border) - To customize the color, width and opacity of the border of the Maps.
* [margin](../api/maps/mapsModel/#margin) - To customize the margins of the Maps.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs20" %}
{% endif %}

## Customizing Maps area

By default, the background color of the shape maps is set as **white**. To modify the background color of the Maps area, the [background](../api/maps/mapsAreaSettingsModel/#background) property in the [mapsArea](../api/maps/mapsAreaSettingsModel) is used. The border of the Maps area can be customized using the [border](../api/maps/mapsAreaSettingsModel/#border) property in the [mapsArea](../api/maps/mapsAreaSettingsModel).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs21" %}
{% endif %}

## Customizing the shapes

The following properties are available in [shapeSettings](../api/maps/shapeSettingsModel) to customize the shapes of the Maps.

* [fill](../api/maps/shapeSettingsModel/#fill) - To apply the fill color to the all the shapes.
* [autofill](../api/maps/shapeSettingsModel/#autofill) - To apply the palette colors to the shapes if it is set as true.
* [palette](../api/maps/shapeSettingsModel/#palette) - To set the custom palette for the shapes.
* [border](../api/maps/shapeSettingsModel/#border) - To customize the color, width and opacity of the border of the shapes.
* [dashArray](../api/maps/shapeSettingsModel/#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the shapes.
* [opacity](../api/maps/shapeSettingsModel/#opacity) - To customize the transparency for the shapes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs22" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs22" %}
{% endif %}

## Setting color to the shapes from the data source

The color for each shape in the Maps can be set using the [colorValuePath](../api/maps/shapeSettingsModel/#colorvaluepath) property of [shapeSettings](../api/maps/shapeSettingsModel). The value for the [colorValuePath](../api/maps/shapeSettingsModel/#colorvaluepath) property is the field name from the data source of the [shapeSettings](../api/maps/shapeSettingsModel) which contains the color values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs23" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs23/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs23" %}
{% endif %}

## Applying border to individual shapes

The border of each shape in the Maps can be customized using the [borderColorValuePath](../api/maps/shapeSettingsModel/#bordercolorvaluepath) and [borderWidthValuePath](../api/maps/shapeSettingsModel/#borderwidthvaluepath) properties to modify the color and the width of the border respectively. The field name in the data source of the layer which contains the color and the width values must be set in the [borderColorValuePath](../api/maps/shapeSettingsModel/#bordercolorvaluepath) and [borderWidthValuePath](../api/maps/shapeSettingsModel/#borderwidthvaluepath) properties respectively. If the values of [borderWidthValuePath](../api/maps/shapeSettingsModel/#borderwidthvaluepath) and [borderColorValuePath](../api/maps/shapeSettingsModel/#bordercolorvaluepath) do not match with the field name from the data source, then the color and width of the border will be applied to the shapes using the [border](../api/maps/shapeSettingsModel/#border) property in the [shapeSettings](../api/maps/shapeSettingsModel).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs24" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs24" %}
{% endif %}

## Projection type

The Maps control supports the following projection types:

* Mercator
* Equirectangular
* Miller
* Eckert3
* Eckert5
* Eckert6
* Winkel3
* AitOff

By default, the Maps are rendered by the **Mercator** projection type in which the Maps are rendered based on the coordinates. So, the Maps is not stretched. To change the type of projection in the Maps, the [projectionType](../api/maps/projectionType/) property is used.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/projection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/projection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/projection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/projection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/projection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/projection-cs1" %}
{% endif %}