---
layout: post
title: Es5 getting started with ##Platform_Name## Maps control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Maps control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Control Initialization

<!-- markdownlint-disable MD009 -->
<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD031 -->
<!-- markdownlint-disable MD040 -->
The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create a folder `quickstart` for getting started application.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
>`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-data\dist\global\ej2-data.min.js`
>
>`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-svg-base\dist\global\ej2-svg-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-maps\dist\global\ej2-maps.min.js`

The below located script file contains all Syncfusion JavaScript (ES5) UI control resources.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `~/quickstart/resources/scripts` for script files and `~/quickstart/resources/styles` for styles.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` and add the Essentials JS 2 script and style references.

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 Maps's global script (Control Script) -->
        <script src="resources/scripts/ej2-maps.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Now, add a div element to initiate the `Syncfusion JavaScript (ES5) Maps` control in the `~/quickstart/index.html` by using following code

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 maps's global script (Control Script) -->
        <script src="resources/maps/ej2-maps.min.js" type="text/javascript"></script>
    </head>
    <body>
    <div id='container'>
        <div id='element'></div>
    </div>
</body>
</html>
```

**Step 6:** Add the Maps control to the div element with `id` attribute as "**element**" using the below code. The below code can be added as separate script file (index.js) in `~/quickstart/index.js` and refer it in the **script** tag within the **body** tag.

```
var map = new ej.maps.Maps({
   layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');
```

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    //..
    //..
    <body>
    <div id='container'>
        <div id='element'></div>
        <!-- Add the Maps script -->
        <script src="index.js"></script>
    </div>
</body>
</html>
```

**Step 7:** Add the data `world_map.js` as a script file within the **head** tag of the HTML code.

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Add the worldmap -->
        <script src="world_map.js"></script>
    </head>
</html>
```

>Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) here. These data must be referred as script file in the HTML code.

**Step 8:** Now, run the `index.html` in web browser, it will render the **Syncfusion JavaScript maps** control.

### Using CDN link for script and style reference

**Step 1:** Create a folder `quickstart` for getting started application.

**Step 2:** The Essential JS 2 controls's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js`](https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js)
>

**Step 3:** Create a HTML page **index.html** in the **quickstart** folder and add the following CDN link references.
```
<script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js"></script>

```

**Step 4:** Now, add the div element for initiating the `Syncfusion JavaScript (ES5) maps` control in the index.html by using following code.

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js"></script>
    </head>
    <body>
        <div id='container'>
            <div id='element'></div>
        </div>
    </body>
</html>
```

**Step 5:** Add the Maps control to the div element with `id` attribute as "**element**" using the below code. The below code can be added as separate script file (index.js) in `~/quickstart/index.js` and refer it in the **script** tag within the **body** tag.

```
var map = new ej.maps.Maps({
   layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');
```

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    //..
    //..
    <body>
        <div id='container'>
            <div id='element'></div>
            <!-- Add the Maps script -->
            <script src="index.js"></script>
        </div>
    </body>
</html>
```

**Step 6:** Add the data `world_map.js` as a script file within the **head** tag of the HTML code.

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Add the worldmap -->
        <script src="world_map.js"></script>
    </head>
</html>
```

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) here. These data must be referred as script file in the HTML code.

**Step 7:** Now, run the `index.html` in web browser, it will render the **Syncfusion JavaScript maps** control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs54/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs54/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs54" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) here.

<!-- markdownlint-disable MD009 -->

## Bind data source to map

The following properties in layers are used for binding data source to map.

* `dataSource`
* `shapeDataPath`
* `shapePropertyPath`

The [`dataSource`](../api/maps/layerSettingsModel/#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](../api/maps/layerSettingsModel/#shapedatapath) property used to refer the data ID in dataSource. Where as, the [`shapePropertyPath`](../api/maps/layerSettingsModel/#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

The JSON object "UnCountries" is used as data source below.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs55/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs55/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs55" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) here.

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](../api/maps/shapeSettingsModel/#colorvaluepath) property in [`shapeSettings`](../api/maps/shapeSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs56/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs56/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs56" %}

## Add Title for Maps

You can add a title using [`titleSettings`](../api/maps/titleSettingsModel/) property to the map to provide quick information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs57/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs57/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs57" %}

## Enable Legend

You can show legend for the maps by setting true to the [`visible`](../api/maps/legendSettingsModel/#visible) property in [`legendSettings`](../api/maps/legendSettingsModel/) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs58/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs58/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs58" %}

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by setting [`visible`](../api/maps/dataLabelSettingsModel/#visible) property to true in the [`dataLabelSettings`](../api/maps/dataLabelSettingsModel/) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs59/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs59/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs59" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`visible`](../api/maps/tooltipSettingsModel/#visible) property as true in [`tooltipSettings`](../api/maps/tooltipSettingsModel/) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs60/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs60/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs60" %}
