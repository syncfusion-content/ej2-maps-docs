---
layout: post
title: Export with Templates in ##Platform_Name## Maps control | Syncfusion
description: Learn how to export Maps with Templates in the Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Maps 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Export with Templates in ##Platform_Name## Maps control

Maps has template support for marker, data label and tooltip, as well as annotation that is similar to template. We will demonstrate how to export a marker template in the following example. In a similar way, you can export the data label template, tooltip template and annotation.

First, Maps does not support exporting with a marker template. This is because the marker template functionality is intended to render any HTML elements, such as text, tables, images, or custom HTML design, on top of the Maps. Because Maps is an SVG component, the marker templates are positioned above the SVG element in the top, left, bottom, and right positions. As a result, when exporting, the marker templates must be placed in the **foreignObject** element of the SVG and positioned using CSS styles. However, it is not supported by all web browsers. As a workaround, we can achieve the desired result in the sample application itself.

> The Maps with marker template, data label template, tooltip template and annotation can be exported in **PNG**, **JPEG**, and **PDF** formats.

## Export Shape Maps with Template

The following code example will show you how to export a shape Maps with marker template. You can also use this format to frame and make other templates and annotation work.

{% if page.publishingplatform == "typescript" %}

```typescript
// On an external button click, we can process and obtain the final output in PNG, JPEG, or PDF format.
document.getElementById('export').onclick = () => {
  let formatValue: any = document.getElementById('format').value;
  let fileName: string = 'Maps';
  mapsExport(formatValue, fileName);
};

function mapsExport(formatValue, fileName) {
  let markerTemplateEleCount: number = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  ).childElementCount;
  let markerElements: HTMLElement = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  );
  let svg: Element;

  // Creating a new "foreignObject" element for each marker template, adding the marker template element to the "foreignObject" element, and finally appending the newly created "foreignObject" element to the SVG element.
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


   // Create a new canvas element for the marker template, determine the size of the SVG element, and set the same size to the canvas element.
  let canvas: HTMLCanvasElement = document.createElement('canvas');
  document.body.appendChild(canvas);
  let svgSize: any = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  let ctx: CanvasRenderingContext2D = canvas.getContext('2d');

  // The below code converts an SVG element into a data URL and renders it as an image on a web page. By serialising the SVG element into a string and then encoding it in base64, the SVG data is integrated inside the data URL. When the web page is loaded, the created data URL can be passed as the src property of an <img> element, causing the SVG image to be rendered.
  let svgData: string = new XMLSerializer().serializeToString(svg);
  let img: HTMLImageElement = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));

   // The "onload" event is invoked once the image has finished loading. The loaded image is rendered onto a 2D canvas within the event handler function using the "drawImage" method, with the top-left corner of the image positioned at coordinates (0, 0) on the canvas. This ensures that the loaded image is displayed correctly on the canvas once it has finished loading.
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    if (formatValue == 'PNG' || formatValue == 'JPEG') {
      // It creates a data URL from the canvas image to make a download link with the correct file name and format. The link is then included in the document, and a simulated click event is triggered. This enables the user to download the image in PNG or JPEG format with the specified file name.
      let imagedata = canvas.toDataURL('image/png');
      let anchor = document.createElement('a');
      anchor.download = fileName + '.' + formatValue;
      anchor.href = imagedata;
      document.body.appendChild(anchor);
      anchor.click();
    } else if (formatValue == 'PDF') {
      // It takes a image from a canvas element, converts it to a JPEG data URL, and inserts it into a PDF document. The "PdfBitmap" class is used to draw the image on a page in the PDF document. By saving the PDF file as "Maps.pdf", a PDF document containing the captured canvas image is created.
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
```

{% elsif page.publishingplatform == "javascript" %}

```javascript

// On an external button click, we can process and obtain the final output in PNG, JPEG, or PDF format.
document.getElementById('export').onclick = () => {
  var formatValue = document.getElementById('format').value;
  var fileName = 'Maps';
  mapsExport(formatValue, fileName);
};

function mapsExport(formatValue, fileName) {
  var markerTemplateEleCount = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  ).childElementCount;
  var markerElements = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  );
  var svg;

  // Creating a new "foreignObject" element for each marker template, adding the marker template element to the "foreignObject" element, and finally appending the newly created "foreignObject" element to the SVG element.
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
    svg = document.querySelector('#container_svg');
    svg.appendChild(foreign);
  }

  // Create a new canvas element for the marker template, determine the size of the SVG element, and set the same size to the canvas element.
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  var ctx = canvas.getContext('2d');
  
  // The below code converts an SVG element into a data URL and renders it as an image on a web page. By serialising the SVG element into a string and then encoding it in base64, the SVG data is integrated inside the data URL. When the web page is loaded, the created data URL can be passed as the src property of an <img> element, causing the SVG image to be rendered.
  var svgData = new XMLSerializer().serializeToString(svg);
  var img = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));

  // The "onload" event is invoked once the image has finished loading. The loaded image is rendered onto a 2D canvas within the event handler function using the "drawImage" method, with the top-left corner of the image positioned at coordinates (0, 0) on the canvas. This ensures that the loaded image is displayed correctly on the canvas once it has finished loading.
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    if (formatValue == 'PNG' || formatValue == 'JPEG') {
      // It creates a data URL from the canvas image to make a download link with the correct file name and format. The link is then included in the document, and a simulated click event is triggered. This enables the user to download the image in PNG or JPEG format with the specified file name.
      var imagedata = canvas.toDataURL('image/png');
      var anchor = document.createElement('a');
      anchor.download = fileName + '.' + formatValue;
      anchor.href = imagedata;
      document.body.appendChild(anchor);
      anchor.click();
    } else if (formatValue == 'PDF') {
      // It takes a image from a canvas element, converts it to a JPEG data URL, and inserts it into a PDF document. The "PdfBitmap" class is used to draw the image on a page in the PDF document. By saving the PDF file as "Maps.pdf", a PDF document containing the captured canvas image is created.
      var imagedata = canvas.toDataURL('image/jpeg');
      imagedata = imagedata.replace('data:image/jpeg;base64,', '');
      var image = new PdfBitmap(imagedata);
      var pdfdocument = new PdfDocument();
      var page1 = pdfdocument.pages.add();
      page1.graphics.drawImage(image, 0, 0);
      pdfdocument.save('Maps.pdf');
      pdfdocument.destroy();
    }
    canvas.remove();
  };
}
```

{% endif %}

## Export OSM Maps with Template

The following code example will show you how to export an OSM Maps with marker template. You can also use this format to frame and make other templates and annotation work.

{% if page.publishingplatform == "typescript" %}

```typescript

// On an external button click, we can process and obtain the final output in PNG, JPEG, or PDF format.
document.getElementById('export').onclick = () => {
  let formatValue: any = document.getElementById('format').value;
  let fileName: string = 'MapsOSM';
  mapsExport(formatValue, fileName);
};

function mapsExport(formatValue, fileName) {
  let svgParent: HTMLElement = document.getElementById(
    'container_Tile_SVG_Parent'
  );
  let svgObject: Node = document
    .getElementById('container_svg')
    .cloneNode(true);
  let tileSvg: Node = document
    .getElementById('container_Tile_SVG')
    .cloneNode(true);
  let svg;
  let url: string = window.URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(svgObject)], {
      type: 'image/svg+xml',
    })
  );

  // Create a new canvas element for the tile images, determine the size of the Maps element, and set the same size to the canvas element.
  let imageCanvasElement: HTMLCanvasElement = document.createElement('canvas');
  imageCanvasElement.width = maps.availableSize.width;
  imageCanvasElement.height = maps.availableSize.height;
  let ctxt_1: CanvasRenderingContext2D = imageCanvasElement.getContext('2d');

  // Creating a new "foreignObject" element for each marker template, adding the marker template element to the "foreignObject" element, and finally appending the newly created "foreignObject" element to the SVG element.
  let markerTemplateEleCount: number = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  ).childElementCount;
  let markerElements: HTMLElement = document.getElementById(
    'container_LayerIndex_0_Markers_Template_Group'
  );
  for (let i: number = 0; i < markerTemplateEleCount; i++) {
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

  // The below code converts an SVG element into a data URL and renders it as an image on a web page. By serialising the SVG element into a string and then encoding it in base64, the SVG data is integrated inside the data URL. When the web page is loaded, the created data URL can be passed as the src property of an <img> element, causing the SVG image to be rendered.
  let svgXml: string = new XMLSerializer().serializeToString(svg);
  let img: HTMLImageElement = new Image();
  img.src = 'data:image/svg+xml;base64,' + btoa(svgXml);

  // Create a new canvas element for the marker templates, determine the size of the SVG element, and set the same size to the canvas element.
  let foreignObjectCanvas: HTMLCanvasElement = document.createElement('canvas');
  foreignObjectCanvas.width = svg.getBoundingClientRect().width;
  foreignObjectCanvas.height = svg.getBoundingClientRect().height;
  let ctx: CanvasRenderingContext2D = foreignObjectCanvas.getContext('2d');

  let svgParentElement: HTMLElement = document.getElementById(
    'container_MapAreaBorder'
  );
  let top_1: number = parseFloat(svgParentElement.getAttribute('y'));
  let left_1: number = parseFloat(svgParentElement.getAttribute('x'));
  let imgxHttp: XMLHttpRequest = new XMLHttpRequest();
  let imgTileLength_1: number = maps.mapLayerPanel.tiles.length;
  let _loop_1 = function (i) {
    let tile: HTMLElement = document.getElementById(
      'container_tile_' + (i - 1)
    );
    let exportTileImg: HTMLImageElement = new Image();
    exportTileImg.crossOrigin = 'Anonymous';
    ctxt_1.fillStyle = 'transparent';
    ctxt_1.fillRect(0, 0, maps.availableSize.width, maps.availableSize.height);
    
    // The "onload" event is invoked once the image has finished loading. The loaded image is rendered onto a 2D canvas within the event handler function using the "drawImage" method,  with setting transformations on the canvas context based on different conditions and then drawing an image on the canvas using the transformed coordinates. This ensures that the loaded image is displayed correctly on the canvas once it has finished loading.
    exportTileImg.onload = function () {
      if (i === 0 || i === imgTileLength_1 + 1) {
        if (i === 0) {
          ctxt_1.setTransform(1, 0, 0, 1, 0, 0);
          ctxt_1.rect(
            0,
            top_1,
            parseFloat(svgParent.style.width),
            parseFloat(svgParent.style.height)
          );
          ctxt_1.clip();
        } else {
          ctxt_1.setTransform(1, 0, 0, 1, left_1, top_1);
        }
      } else {
        ctxt_1.setTransform(
          1,
          0,
          0,
          1,
          parseFloat(tile.style.left) + left_1,
          parseFloat(tile.style.top) + top_1
        );
      }
      ctxt_1.drawImage(exportTileImg, 0, 0);
      if (i === imgTileLength_1 + 1) {
        if (formatValue == 'PNG' || formatValue == 'JPEG') {
           // It creates a data URL from the canvas image to make a download link with the correct file name and format. The link is then included in the document, and a simulated click event is triggered. This enables the user to download the image in PNG or JPEG format with the specified file name.
          let imagedata: string = imageCanvasElement.toDataURL('image/png');
          let anchor: HTMLAnchorElement = document.createElement('a');
          anchor.download = fileName + '.' + formatValue;
          anchor.href = imagedata;
          document.body.appendChild(anchor);
          anchor.click();
        } else if (formatValue == 'PDF') {
          // It takes a image from a canvas element, converts it to a JPEG data URL, and inserts it into a PDF document. The "PdfBitmap" class is used to draw the image on a page in the PDF document. By saving the PDF file as "MapsOSM.pdf", a PDF document containing the captured canvas image is created.
          let imagedata: string = imageCanvasElement.toDataURL('image/jpeg');
          imagedata = imagedata.replace('data:image/jpeg;base64,', '');
          let image: PdfBitmap = new PdfBitmap(imagedata);
          let pdfdocument: PdfDocument = new PdfDocument();
          let page1: PdfPage = pdfdocument.pages.add();
          page1.graphics.drawImage(image, 0, 0);
          pdfdocument.save('MapsOSM.pdf');
          pdfdocument.destroy();
        }
      }
    };

    // The "onload" event is invoked once the image has finished loading. The loaded image is rendered onto a 2D canvas within the event handler function using the "drawImage" method, with the top-left corner of the image positioned at coordinates (0, 0) on the canvas. This ensures that the loaded image is displayed correctly on the canvas once it has finished loading.
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };

    // It involves setting the source URL of an image element(exportTileImg) based on different conditions. The conditions determine whether the image should be loaded from a provided URL, an SVG image. Additionally, asynchronous HTTP requests are made in some cases to retrieve the image source URL.
    if (i === 0 || i === imgTileLength_1 + 1) {
      if (i === 0) {
        exportTileImg.src = url;
      } else {
        setTimeout(function () {
          exportTileImg.src = window.URL.createObjectURL(
            new Blob([new XMLSerializer().serializeToString(tileSvg)], {
              type: 'image/svg+xml',
            })
          );
          // It creates a new image element and sets its source to a data URL representing the content of the foreignObjectCanvas(marker template).
          let finalImage: HTMLImageElement = new Image();
          finalImage.src = foreignObjectCanvas.toDataURL('image/png');
          document.body.appendChild(finalImage);
          exportTileImg.src =
            document.getElementsByTagName('img')[
              document.getElementsByTagName('img').length - 1
            ].src;
        }, 300);
      }
    } else {
      imgxHttp.open('GET', tile.children[0].getAttribute('src'), true);
      imgxHttp.send();
      exportTileImg.src = tile.children[0].getAttribute('src');
    }
  };
  for (let i: number = 0; i <= imgTileLength_1 + 1; i++) {
    _loop_1(i);
  }
}
```

{% elsif page.publishingplatform == "javascript" %}

```javascript

// On an external button click, we can process and obtain the final output in PNG, JPEG, or PDF format.
document.getElementById('export').onclick = () => {
  var formatValue = document.getElementById('format').value;
  var fileName = 'MapsOSM';
  mapsExport(formatValue, fileName);
};

function mapsExport(formatValue, fileName) {
  var svgParent = document.getElementById('container_Tile_SVG_Parent');
  var svgObject = document.getElementById('container_svg').cloneNode(true);
  var tileSvg = document.getElementById('container_Tile_SVG').cloneNode(true);
  var url = window.URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(svgObject)], {
      type: 'image/svg+xml',
    })
  );

  // Create a new canvas element for the tile images, determine the size of the Maps element, and set the same size to the canvas element.
  var imageCanvasElement = document.createElement('canvas');
  imageCanvasElement.width = maps.availableSize.width;
  imageCanvasElement.height = maps.availableSize.height;
  var ctxt_1 = imageCanvasElement.getContext('2d');

  // Creating a new "foreignObject" element for each marker template, adding the marker template element to the "foreignObject" element, and finally appending the newly created "foreignObject" element to the SVG element.
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
  
  // The below code converts an SVG element into a data URL and renders it as an image on a web page. By serialising the SVG element into a string and then encoding it in base64, the SVG data is integrated inside the data URL. When the web page is loaded, the created data URL can be passed as the src property of an <img> element, causing the SVG image to be rendered.
  var svgXml = new XMLSerializer().serializeToString(svg);
  var img = new Image();
  img.src = 'data:image/svg+xml;base64,' + btoa(svgXml);

  // Create a new canvas element for the marker templates, determine the size of the SVG element, and set the same size to the canvas element.
  var foreignObjectCanvas = document.createElement('canvas');
  foreignObjectCanvas.width = svg.getBoundingClientRect().width;
  foreignObjectCanvas.height = svg.getBoundingClientRect().height;
  var ctx = foreignObjectCanvas.getContext('2d');

  var svgParentElement = document.getElementById('container_MapAreaBorder');
  var top_1 = parseFloat(svgParentElement.getAttribute('y'));
  var left_1 = parseFloat(svgParentElement.getAttribute('x'));
  var imgxHttp = new XMLHttpRequest();
  var imgTileLength_1 = maps.mapLayerPanel.tiles.length;
  var _loop_1 = function (i) {
    var tile = document.getElementById('container_tile_' + (i - 1));
    var exportTileImg = new Image();
    exportTileImg.crossOrigin = 'Anonymous';
    ctxt_1.fillStyle = 'transparent';
    ctxt_1.fillRect(0, 0, maps.availableSize.width, maps.availableSize.height);
    
    // The "onload" event is invoked once the image has finished loading. The loaded image is rendered onto a 2D canvas within the event handler function using the "drawImage" method,  with setting transformations on the canvas context based on different conditions and then drawing an image on the canvas using the transformed coordinates. This ensures that the loaded image is displayed correctly on the canvas once it has finished loading.
    exportTileImg.onload = function () {
      if (i === 0 || i === imgTileLength_1 + 1) {
        if (i === 0) {
          ctxt_1.setTransform(1, 0, 0, 1, 0, 0);
          ctxt_1.rect(
            0,
            top_1,
            parseFloat(svgParent.style.width),
            parseFloat(svgParent.style.height)
          );
          ctxt_1.clip();
        } else {
          ctxt_1.setTransform(1, 0, 0, 1, left_1, top_1);
        }
      } else {
        ctxt_1.setTransform(
          1,
          0,
          0,
          1,
          parseFloat(tile.style.left) + left_1,
          parseFloat(tile.style.top) + top_1
        );
      }
      ctxt_1.drawImage(exportTileImg, 0, 0);
      if (i === imgTileLength_1 + 1) {
        if (formatValue == "PNG" || formatValue == "JPEG") {
          // It creates a data URL from the canvas image to make a download link with the correct file name and format. The link is then included in the document, and a simulated click event is triggered. This enables the user to download the image in PNG or JPEG format with the specified file name.
          var imagedata = imageCanvasElement.toDataURL('image/png');
          var anchor = document.createElement('a');
          anchor.download = fileName + '.' + formatValue;
          anchor.href = imagedata;
          document.body.appendChild(anchor);
          anchor.click();
          maps.isExportInitialTileMap = false;
        } else if(formatValue == "PDF") {
          // It takes a image from a canvas element, converts it to a JPEG data URL, and inserts it into a PDF document. The "PdfBitmap" class is used to draw the image on a page in the PDF document. By saving the PDF file as "MapsOSM.pdf", a PDF document containing the captured canvas image is created.
          var imagedata = imageCanvasElement.toDataURL("image/jpeg");
            imagedata = imagedata.replace("data:image/jpeg;base64,", "");
            var image = new PdfBitmap(imagedata);
            var pdfdocument = new PdfDocument();
            var page1 = pdfdocument.pages.add();
            page1.graphics.drawImage(image, 0, 0);
            pdfdocument.save("MapsOSM.pdf");
            pdfdocument.destroy();
        }
      }
    };

    // The "onload" event is invoked once the image has finished loading. The loaded image is rendered onto a 2D canvas within the event handler function using the "drawImage" method, with the top-left corner of the image positioned at coordinates (0, 0) on the canvas. This ensures that the loaded image is displayed correctly on the canvas once it has finished loading.
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };

    // It involves setting the source URL of an image element(exportTileImg) based on different conditions. The conditions determine whether the image should be loaded from a provided URL, an SVG image. Additionally, asynchronous HTTP requests are made in some cases to retrieve the image source URL.
    if (i === 0 || i === imgTileLength_1 + 1) {
      if (i === 0) {
        exportTileImg.src = url;
      } else {
        setTimeout(function () {
          exportTileImg.src = window.URL.createObjectURL(
            new Blob([new XMLSerializer().serializeToString(tileSvg)], {
              type: 'image/svg+xml',
            })
          );
          // It creates a new image element and sets its source to a data URL representing the content of the foreignObjectCanvas(marker template).
          var finalImage = new Image();
          finalImage.src = foreignObjectCanvas.toDataURL('image/png');
          document.body.appendChild(finalImage);
          exportTileImg.src =
            document.getElementsByTagName('img')[
              document.getElementsByTagName('img').length - 1
            ].src;
        }, 300);
      }
    } else {
      imgxHttp.open('GET', tile.children[0].getAttribute('src'), true);
      imgxHttp.send();
      exportTileImg.src = tile.children[0].getAttribute('src');
    }
  };
  for (var i = 0; i <= imgTileLength_1 + 1; i++) {
    _loop_1(i);
  }
}
```
{% endif %}


