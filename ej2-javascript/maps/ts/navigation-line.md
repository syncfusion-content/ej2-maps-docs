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

The navigation lines are used to denote the path between two locations. This feature can be used to draw flight or sea routes. Navigation lines are enabled by setting the [`visible`](../api/maps/navigationLineSettingsModel/#visible) property of the [`navigationLineSettings`](../api/maps/navigationLineSettingsModel) to **true**. To render the navigation line in Maps, **NavigationLine** Module must be injected into the Maps using the **Maps.Inject(NavigationLine)** method.

```ts
import { Maps, NavigationLine } from '@syncfusion/ej2-maps';
Maps.Inject(NavigationLine);
let map: Maps = new Maps({ });
```

## Customization

The following properties are available in [`navigationLineSettings`](../api/maps/navigationLineSettingsModel/) to customize the navigation line of the Maps component.

* [`color`](../api/maps/navigationLineSettingsModel/#color) - To apply the color for navigation lines in Maps.
* [`dashArray`](../api/maps/navigationLineSettingsModel/#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the navigation lines.
* [`width`](../api/maps/navigationLineSettingsModel/#width) - To customize the width of the navigation lines.
* [`angle`](../api/maps/navigationLineSettingsModel/#angle) - To customize the angle of the navigation lines.
* [`highlightSettings`](../api/maps/navigationLineSettingsModel/#highlightsettings) - To customize the highlight settings of the navigation line.
* [`selectionSettings`](../api/maps/navigationLineSettingsModel/#selectionsettings) - To customize the selection settings of the navigation line.

To navigate the line between two cities on the world map, [`latitude`](../api/maps/navigationLineSettingsModel/#latitude) and [`longitude`](../api/maps/navigationLineSettingsModel/#longitude) values are used to indicate the start and end points of navigation lines drawn on Maps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs206/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs206/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs206" %}

## Enabling the arrows

To enable the arrow in the navigation line, set the [`showArrow`](../api/maps/arrowModel/#showarrow) property of [`arrowSettings`](../api/maps/navigationLineSettingsModel/#arrowsettings) to **true**. The following properties are available in [`arrowSettings`](../api/maps/navigationLineSettingsModel/#arrowsettings) to customize the arrow of the navigation lines.

* [`color`](../api/maps/arrowModel/#color) - To apply the color for arrow of the navigation line.
* [`offset`](../api/maps/arrowModel/#offset) - To customize the offset position of the arrow of the navigation line.
* [`position`](../api/maps/arrowModel/#position) - To customize the position of the arrow in navigation line. The possible values can be **Start** and **End**.
* [`size`](../api/maps/arrowModel/#size) - To customize the size of the arrow in pixels.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs207/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs207/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs207" %}