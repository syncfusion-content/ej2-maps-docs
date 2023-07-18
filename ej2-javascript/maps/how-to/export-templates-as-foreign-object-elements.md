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


## How to export the OSM Maps with Marker template using ForeignObject

The Maps component do not support exporting with marker template. This is because the marker template are intended to render any elements in the Maps component such as text, images, or custom elements. Since Maps is a SVG based control, the marker templates can be rendered as **foreignObject** element. However, some web browsers do not support it.  As a workaround, we can achieve the same in the sample level.

The OSM Maps with marker template can be exported in **PNG**, **JPEG**, and **PDF** formats. Similarly, the annotations and tooltip template can be exported as **foreignObject** elements. The example below demonstrates to export the OSM Maps with marker template.

{% if page.publishingplatform == "typescript" %}

```
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

  // osm image
  let imageCanvasElement: HTMLCanvasElement = document.createElement('canvas');
  imageCanvasElement.width = maps.availableSize.width;
  imageCanvasElement.height = maps.availableSize.height;
  let ctxt_1: CanvasRenderingContext2D = imageCanvasElement.getContext('2d');

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

  let svgXml: string = new XMLSerializer().serializeToString(svg);
  let img: HTMLImageElement = new Image();
  img.src = 'data:image/svg+xml;base64,' + btoa(svgXml);

  // marker template
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
    ctxt_1.font = maps.titleSettings.textStyle.size + ' Arial';
    let titleElement: HTMLElement = document.getElementById(
      'container_Map_title'
    );
    if (titleElement != null) {
      ctxt_1.fillStyle = titleElement.getAttribute('fill');
      ctxt_1.fillText(
        maps.titleSettings.text,
        parseFloat(titleElement.getAttribute('x')),
        parseFloat(titleElement.getAttribute('y'))
      );
    }
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
        let imagedata: string = imageCanvasElement.toDataURL('image/png');
        let anchor: HTMLAnchorElement = document.createElement('a');
        anchor.download = fileName + '.' + formatValue;
        anchor.href = imagedata;
        document.body.appendChild(anchor);
        anchor.click();
      }
    };

    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };

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

// code for property panel

document.getElementById('export').onclick = () => {
  let formatValue: any = document.getElementById('format').value;
  let fileName: string = 'MapsOSM';
  mapsExport(formatValue, fileName);
};

```
> **Sample**: [Export the OSM Maps with Marker template](https://stackblitz.com/edit/wogy6f-5ms89w?file=index.ts,index.html).

{% elsif page.publishingplatform == "javascript" %}

```
function mapsExport(formatValue, fileName) {
  var svgParent = document.getElementById('container_Tile_SVG_Parent');
  var svgObject = document.getElementById('container_svg').cloneNode(true);
  var tileSvg = document.getElementById('container_Tile_SVG').cloneNode(true);
  var url = window.URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(svgObject)], {
      type: 'image/svg+xml',
    })
  );

  // osm image
  var imageCanvasElement = document.createElement('canvas');
  imageCanvasElement.width = maps.availableSize.width;
  imageCanvasElement.height = maps.availableSize.height;
  var ctxt_1 = imageCanvasElement.getContext('2d');

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

  var svgXml = new XMLSerializer().serializeToString(svg);
  var img = new Image();
  img.src = 'data:image/svg+xml;base64,' + btoa(svgXml);

  // marker template
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
    ctxt_1.font = maps.titleSettings.textStyle.size + ' Arial';
    var titleElement = document.getElementById('container_Map_title');
    if (titleElement != null) {
      ctxt_1.fillStyle = titleElement.getAttribute('fill');
      ctxt_1.fillText(
        maps.titleSettings.text,
        parseFloat(titleElement.getAttribute('x')),
        parseFloat(titleElement.getAttribute('y'))
      );
    }
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
        var imagedata = imageCanvasElement.toDataURL('image/png');
        var anchor = document.createElement('a');
        anchor.download = fileName + '.' + formatValue;
        anchor.href = imagedata;
        document.body.appendChild(anchor);
        anchor.click();
        maps.isExportInitialTileMap = false;
      }
    };

    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };

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

// code for property panel

document.getElementById('export').onclick = () => {
  var formatValue = document.getElementById('format').value;
  var fileName = 'MapsOSM';
  mapsExport(formatValue, fileName);
};

```
> **Sample**: [Export the OSM Maps with Marker template](https://stackblitz.com/edit/nk7yph-569sdt?file=index.js).

{% endif %}


