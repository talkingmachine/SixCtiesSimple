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

  useEffect(()=>{
    if (map) {
      points.forEach(({lat, lng})=>{
        L.marker({
          lat: lat,
          lng: lng
        }).addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div style={{height: '100%'}} ref={mapRef}>
    </div>);
}

export default Map;
