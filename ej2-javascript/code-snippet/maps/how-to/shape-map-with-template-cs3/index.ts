

import { usa_map } from './usa.ts';
import { Maps, Marker } from '@syncfusion/ej2-maps';
import { PdfBitmap, PdfDocument } from '@syncfusion/ej2-pdf-export';
Maps.Inject(Marker);

// initialize Maps component
let map: Maps = new Maps({
    allowPdfExport: true,
    allowImageExport: true,
    layers: [
        {
            shapeData: usa_map,
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



