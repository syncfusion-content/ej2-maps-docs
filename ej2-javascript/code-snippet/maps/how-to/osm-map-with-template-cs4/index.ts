

import { Maps, Marker} from '@syncfusion/ej2-maps';
import { PdfBitmap, PdfDocument } from '@syncfusion/ej2-pdf-export';
Maps.Inject(Marker);

// initialize Maps component
let map: Maps = new Maps({
    allowPdfExport: true,
    allowImageExport: true,
    background: 'transparent',
    mapsArea: {
        background: 'transparent',
    },
    width: '600px',
    height: '500px',
    layers: [
        {
            urlTemplate: 'http://a.tile.openstreetmap.org/level/tileX/tileY.png',
            markerSettings: [
                {
                    dataSource: [
                        {
                            latitude: 31.85866353245237,
                            longitude: -99.06254504620819,
                            name: 'Texas',
                        },
                        {
                            latitude: 38.04814225870669,
                            longitude: -92.39290879419217,
                            name: 'Missouri',
                        },
                        {
                            latitude: 46.71856608662662,
                            longitude: -109.02246313616106,
                            name: 'Montana',
                        },
                    ],
                    visible: true,
                    fill: 'white',
                    width: 3,
                    animationDuration: 0,
                    template:
                        '<div ><div style="font-size:10px;color:black">${name}</div><div style="width:15px;height:15px;margin-left:8px;color:white;border:2px solid black;border-radius:50%"></div></div>',
                    border: { width: 2, color: '#333' },
                },
            ],
            shapeSettings: {
                fill: 'grey',
            },
        },
    ],
}, '#container');

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

