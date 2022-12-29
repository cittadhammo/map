import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';
import {getCenter} from 'ol/extent';

function dynamicMap (url) {
  
  const imageLayer = new ImageLayer();
  const imageView = new View();
  const img = document.createElement('img');
  img.onload = function() {
    const extent = [0, 0, img.width, img.height];
    const projection = {
      code: "xkcd-image" + url,
      units: "pixels",
      extent: extent,
    }
    imageLayer.setSource(
      new Static({
        url: url,
        projection: new Projection(projection),
        imageExtent: extent,
      }),
    );
    imageView.setProperties({
      projection: projection,
      center: getCenter(extent),
      zoom: 2
    })
  
  };
  img.src = url;
  const map = new Map({
    layers: [imageLayer],
    target: 'map',
    view: imageView
  });
  return map;
}

var map = new Map(dynamicMap("https://upload.wikimedia.org/wikipedia/commons/a/aa/Simple_shapes_example.png"));

