---
layout: post
title: Print in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Print in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print in ##Platform_Name## Maps control

## Print

The rendered Maps can be printed directly from the browser by calling the [`print`](../api/maps/#print) method. To use the print functionality, the **Print** module must be injected into the Maps using `Maps.Inject(Print)` method and set the [`allowPrint`](../api/maps/#allowprint) property to **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/print-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/print-cs3" %}

## Export

### Image Export

To use the image export functionality in Maps, **ImageExport** module must be injected into the Maps using **Maps.Inject(ImageExport)** method and set the [`allowImageExport`](../api/maps/#allowimageexport) property to **true**.

```ts
import { Maps, ImageExport } from '@syncfusion/ej2-maps';
Maps.Inject(ImageExport);
let map: Maps = new Maps({ });
```

The rendered Maps can be exported as an image using the [`export`](../api/maps/#export) method. The method requires two parameters: image type and file name. The Maps can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/export-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/export-cs7" %}

### Exporting Maps as base 64 string of the file

The image can be exported as base64 string for the JPEG and PNG formats. The rendered Maps can be exported to image as a base64 string using the [`export`](../api/maps/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/export-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/export-cs8" %}

### PDF Export

To use the PDF export functionality, **PdfExport** module must be injected into the Maps using **Maps.Inject(PdfExport)** method and set the [`allowPdfExport`](../api/maps/#allowpdfexport) property to **true**.

```ts
import { Maps, PdfExport } from '@syncfusion/ej2-maps';
Maps.Inject(PdfExport);
let map: Maps = new Maps({ });
```

The rendered Maps can be exported as PDF using the [`export`](../api/maps/#export) method. The [`export`](../api/maps/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and **0** indicates portrait and **1** indicates landscape.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/export-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/export-cs9" %}

>The exporting of the Maps as base64 string is not supported for the PDF export.

<!-- markdownlint-disable MD010 -->

### Export the tile Maps

The rendered Maps with providers such as OSM, Bing and Google static Maps can be exported using the [`export`](../api/maps/#export) method. It supports the following export formats.

* JPEG
* PNG
* PDF

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/OSMPrintExport-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/OSMPrintExport-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/OSMPrintExport-cs3" %}