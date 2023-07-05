---
layout: post
title: Maps Export in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about how to export the Maps in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Maps Export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Maps Export in ##Platform_Name## Maps control

## How to export the Maps with Marker template using ForeignObject

The Maps component do not support exporting with marker template. This is because the marker template are intended to render any elements in the Maps component such as text, images, or custom elements. Since Maps is a SVG based control, the marker templates can be rendered as **foreignObject** element. However, some web browsers do not support it.  As a workaround, we can achieve the same in the sample level.

The Maps with marker template can be exported in **PNG**, **JPEG**, and **PDF** formats. Similarly, the annotations and tooltip template can be exported as **foreignObject** elements. The example below demonstrates to export the Maps with marker template.

{% if page.publishingplatform == "typescript" %}

```
function mapsExport(formatValue, fileName) {
  let markerTemplateEleCount: number = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  ).childElementCount;
  let markerElements: HTMLElement = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  );
  let svg: Element;
  for (let i = 0; i < markerTemplateEleCount; i++) {
    let markerIndex: string = markerElements.children[i].id
      .split('_MarkerIndex_')[1]
      .split('_')[0];
    let layerIndex: string = markerElements.children[i].id
      .split('_LayerIndex_')[1]
      .split('_')[0];
    let markerEle: NodeListOf<Element> = document
      .getElementById(
        'container_LayerIndex_' + layerIndex + '_Markers_Template_Group'
      )
      .querySelectorAll(
        '[id*="container_LayerIndex_' +
          layerIndex +
          '_MarkerIndex_' +
          markerIndex +
          '_dataIndex_"]'
      );
    let marker: Element = markerEle[i];
    let foreign: SVGForeignObjectElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'foreignObject'
    );
    foreign.setAttribute(
      'width',
      marker.getBoundingClientRect().width.toString()
    );
    foreign.setAttribute(
      'height',
      marker.getBoundingClientRect().height.toString()
    );
    foreign.setAttribute('x', marker['style']['left']);
    foreign.setAttribute('y', marker['style']['top']);
    foreign.innerHTML = marker.innerHTML;
    marker['style']['display'] = 'none';
    svg = document.querySelector('#container_svg');
    svg.appendChild(foreign);
  }

  let svgData: string = new XMLSerializer().serializeToString(svg);
  let canvas: HTMLCanvasElement = document.createElement('canvas');
  document.body.appendChild(canvas);
  let svgSize: any = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  let img: HTMLImageElement = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    if (formatValue == 'PNG' || formatValue == 'JPEG') {
      let imagedata = canvas.toDataURL('image/png');

      let anchor = document.createElement('a');

      anchor.download = fileName + '.' + formatValue;

      anchor.href = imagedata;

      document.body.appendChild(anchor);

      anchor.click();
    } else if (formatValue == 'PDF') {
      let imagedata = canvas.toDataURL('image/jpeg');
      imagedata = imagedata.replace('data:image/jpeg;base64,', '');
      let image: PdfBitmap = new PdfBitmap(imagedata);
      let pdfdocument: PdfDocument = new PdfDocument();
      let page1 = pdfdocument.pages.add();
      page1.graphics.drawImage(image, 0, 0);
      //Save the document.
      pdfdocument.save('Maps.pdf');
      pdfdocument.destroy();
    }
    canvas.remove();
  };
}

// code for property panel

document.getElementById('export').onclick = () => {
  let formatValue: any = document.getElementById('format').value;
  let fileName: string = 'Maps';
  mapsExport(formatValue, fileName);
};

```
> **Sample**: [Export the Maps with Marker template](https://stackblitz.com/edit/wogy6f-kjxdun?file=index.ts).

{% elsif page.publishingplatform == "javascript" %}

```
function mapsExport(formatValue, fileName) {
  debugger;
  var markerTemplateEleCount = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  ).childElementCount;
  var markerElements = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  );
  for (var i = 0; i < markerTemplateEleCount; i++) {
    var markerIndex = markerElements.children[i].id
      .split('_MarkerIndex_')[1]
      .split('_')[0];
    var layerIndex = markerElements.children[i].id
      .split('_LayerIndex_')[1]
      .split('_')[0];
    var markerEle = document
      .getElementById(
        'container_LayerIndex_' + layerIndex + '_Markers_Template_Group'
      )
      .querySelectorAll(
        '[id*="container_LayerIndex_' +
          layerIndex +
          '_MarkerIndex_' +
          markerIndex +
          '_dataIndex_"]'
      );
    var marker = markerEle[i];
    var foreign = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'foreignObject'
    );
    foreign.setAttribute(
      'width',
      marker.getBoundingClientRect().width.toString()
    );
    foreign.setAttribute(
      'height',
      marker.getBoundingClientRect().height.toString()
    );
    foreign.setAttribute('x', marker.style.left);
    foreign.setAttribute('y', marker.style.top);
    foreign.innerHTML = marker.innerHTML;
    marker.style.display = 'none';
    var svg = document.querySelector('#container_svg');
    svg.appendChild(foreign);
  }
  var svgData = new XMLSerializer().serializeToString(svg);
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  var ctx = canvas.getContext('2d');
  var img = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    if (formatValue == 'PNG' || formatValue == 'JPEG') {
      var imagedata = canvas.toDataURL('image/png');

      var anchor = document.createElement('a');

      anchor.download = fileName + '.' + formatValue;

      anchor.href = imagedata;

      document.body.appendChild(anchor);

      anchor.click();
    } else if (formatValue == 'PDF') {
      var imagedata = canvas.toDataURL('image/jpeg');
      imagedata = imagedata.replace('data:image/jpeg;base64,', '');
      var image = new PdfBitmap(imagedata);
      var pdfdocument = new PdfDocument();
      var page1 = pdfdocument.pages.add();
      page1.graphics.drawImage(image, 0, 0);
      //Save the document.
      pdfdocument.save('Maps.pdf');
      pdfdocument.destroy();
    }
    canvas.remove();
  };
}

// code for property panel

document.getElementById('export').onclick = () => {
  var formatValue = document.getElementById('format').value;
  var fileName = 'Maps';
  mapsExport(formatValue, fileName);
};

```
> **Sample**: [Export the Maps with Marker template](https://stackblitz.com/edit/nk7yph-nqgfmw?file=index.js).

{% endif %}