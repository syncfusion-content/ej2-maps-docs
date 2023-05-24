---
layout: post
title: Data label in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Data label in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data label 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data label in ##Platform_Name## Maps control

Data labels provide information to users about the shapes of the Maps control. It can be enabled by setting the [visible](../api/maps/dataLabelSettingsModel/#visible) property of the [dataLabelSettings](../api/maps/dataLabelSettingsModel/) to **true**.

## Adding data labels

To display the data labels in the Maps, set the field name containing the text to be displayed from the data source or shape data in the [labelPath](../api/maps/dataLabelSettingsModel/#labelpath) property of the `dataLabelSettings` property.

In the following example, the value of `labelPath` property is set from the field name in the shape data of the Maps layer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs48/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs48" %}

In the following example, the value of `labelPath` property is set from the field name in the data source of the layer settings.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs49/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs49/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs49" %}

## Customization

The following properties are available in the `dataLabelSettings` to customize the data label of the Maps control.

* [border](../api/maps/dataLabelSettingsModel/#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [fill](../api/maps/dataLabelSettingsModel/#fill) - To apply the color of the data labels in Maps.
* [opacity](../api/maps/dataLabelSettingsModel/#opacity) - To customize the transparency of the data labels in Maps.
* [textStyle](../api/maps/dataLabelSettingsModel/#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs50/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs50/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs50" %}

## Smart labels

The Maps control provides an option to handle the labels when they intersect with the corresponding shape borders using the [smartLabelMode](../api/maps/dataLabelSettingsModel/#smartlabelmode) property. The following options are available in the `smartLabelMode` property.

* **None** -  It specifies that no action is taken, when a label exceeds the shape's region.
* **Hide** -  It specifies to hide the labels, when it exceeds the shape's region.
* **Trim** -  It specifies to trim the labels, when it exceeds the shape's region.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs51/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs51/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs51" %}

## Intersect action

The Maps component provides an option to handle the labels when a label intersects with another label using the [intersectionAction](../api/maps/dataLabelSettingsModel/#intersectionaction) property. The following options are available in the `intersectionAction` property.

* **None** -  It specifies that no action is taken, when the labels intersect.
* **Hide** -  It specifies to hide the labels when they intersect.
* **Trim** -  It specifies to trim the labels when they intersect.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs52/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs52/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs52" %}

## Adding data label as a template

Any HTML elements can be added as a template in the data labels by using the [template](../api/maps/dataLabelSettingsModel/#template) property of `dataLabelSettings` in the Maps control.

>The properties of data label such as, `smartLabelMode` , `intersectionAction`, `border`, `fill`, `opacity` and `textStyle` properties are not applicable to `template` property. The styles can be applied to the label template using the CSS styles of the HTML element.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs53/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs53/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs53" %}