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

Data labels provide information to users about the shapes of the Maps control. It can be enabled by setting the [visible](../api/maps/dataLabelSettingsModel/#visible) property of the [dataLabelSettings](../api/maps/dataLabelSettingsModel/) to **true**. To display the data labels in Maps, **DataLabel** module must be injected into the Maps using **Maps.Inject(DataLabel)** method. Refer to the below code snippet to inject the **DataLabel** module into the Maps component.

```ts
import { Maps, DataLabel } from '@syncfusion/ej2-maps';
Maps.Inject(DataLabel);
let map: Maps = new Maps({ });
```

## Adding data labels

To display the data labels in the Maps, set the field name containing the text to be displayed from the data source or shape data in the [labelPath](../api/maps/dataLabelSettingsModel/#labelpath) property of the `dataLabelSettings` property.

In the following example, the value of `labelPath` property is set from the field name in the shape data of the Maps layer.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs164/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs164/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs164" %}

In the following example, the value of `labelPath` property is set from the field name in the data source of the layer settings.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs165/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs165/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs165" %}

## Customization

The following properties are available in the `dataLabelSettings` to customize the data label of the Maps control.

* [border](../api/maps/dataLabelSettingsModel/#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [fill](../api/maps/dataLabelSettingsModel/#fill) - To apply the color of the data labels in Maps.
* [opacity](../api/maps/dataLabelSettingsModel/#opacity) - To customize the transparency of the data labels in Maps.
* [textStyle](../api/maps/dataLabelSettingsModel/#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs166/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs166/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs166" %}

## Smart labels

The Maps control provides an option to handle the labels when they intersect with the corresponding shape borders using the [smartLabelMode](../api/maps/dataLabelSettingsModel/#smartlabelmode) property. The following options are available in the `smartLabelMode` property.

* **None** -  It specifies that no action is taken, when a label exceeds the shape's region.
* **Hide** -  It specifies to hide the labels, when it exceeds the shape's region.
* **Trim** -  It specifies to trim the labels, when it exceeds the shape's region.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs167/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs167/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs167" %}

## Intersect action

The Maps component provides an option to handle the labels when a label intersects with another label using the [intersectionAction](../api/maps/dataLabelSettingsModel/#intersectionaction) property. The following options are available in the `intersectionAction` property.

* **None** -  It specifies that no action is taken, when the labels intersect.
* **Hide** -  It specifies to hide the labels when they intersect.
* **Trim** -  It specifies to trim the labels when they intersect.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs168/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs168/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs168" %}

## Adding data label as a template

Any HTML elements can be added as a template in the data labels by using the [template](../api/maps/dataLabelSettingsModel/#template) property of `dataLabelSettings` in the Maps control.

>The properties of data label such as, `smartLabelMode` , `intersectionAction`, `border`, `fill`, `opacity` and `textStyle` properties are not applicable to `template` property. The styles can be applied to the label template using the CSS styles of the HTML element.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs169/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs169/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs169" %}