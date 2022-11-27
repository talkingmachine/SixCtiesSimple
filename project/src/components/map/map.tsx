import L from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { LeafletMap, point } from '../../types/mapTypes';

type MapProps = {
  center: point;
  points: point[];
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
