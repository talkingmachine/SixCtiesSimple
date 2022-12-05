import L from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { LeafletMap, Point } from '../../types/mapTypes';

type MapProps = {
  center: Point;
  points: Point[];
}

function Map ({center, points}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map:LeafletMap = useMap(mapRef, center);
  const markersLayer = map ? L.layerGroup().addTo(map) : null;

  useEffect(()=>{
    if (markersLayer) {
      points.forEach(({lat, lng})=>{
        L.marker({
          lat: lat,
          lng: lng
        }).addTo(markersLayer);
      });
    }
    return () => {
      markersLayer?.clearLayers();
    };
  }, [markersLayer, points]);

  return (
    <div style={{height: '81vh'}} ref={mapRef}>
    </div>);
}
// заменить style
export default Map;
