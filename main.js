import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';
import {getCenter} from 'ol/extent';
import {getHeight} from 'ol/extent';
import {getWidth} from 'ol/extent';
// import Extent from 'ol/extent';

// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.
// const extent = [0, 0, 1, 1];
// const projection = new Projection({
//   code: 'xkcd-image',
//   units: 'pixels',
//   extent: extent,
// });
//
// const map = new Map({
//   layers: [
//     new ImageLayer({
//       source: new Static({
//         attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
//         url: 'suttapitaka.svg',
//         projection: projection,
//         imageExtent: extent,
//       }),
//     }),
//   ],
//   target: 'map',
//   view: new View({
//     projection: projection,
//     center: getCenter(extent),
//     zoom: 2,
//     maxZoom: 8,
//   }),
// });

var extent = [0, 0, 512, 512];
var projection = new Projection({
  code: 'static-image',
  units: 'pixels',
  extent: extent
});

var map = new Map({
  layers: [
    new ImageLayer({
      source: new Static({
        url: 'suttapitaka.svg',
        projection: projection,
        imageExtent: extent,
        imageLoadFunction: function (image, src) {
           image.getImage().src = src;
           image.getImage().width = getWidth(extent);
           image.getImage().height = getHeight(extent);
        }
      })
    })
  ],
  target: 'map',
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom: 0
  })
});
