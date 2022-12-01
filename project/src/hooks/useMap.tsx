import {useState, MutableRefObject, useRef, useEffect} from 'react';
import { Point } from '../types/mapTypes';
import L, {Map} from 'leaflet';

function useMap(mapRef:MutableRefObject<HTMLElement | null>, center: Point): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(()=>{if (mapRef.current !== null && !isRenderedRef.current) {
    const instance = L.map(mapRef.current, {
      center: {
        lat: center.lat,
        lng: center.lng
      },
      zoom: center.zoom
    });

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    )
      .addTo(instance);
    setMap(instance);
    isRenderedRef.current = true;
  }}, [mapRef, center]);

  return map;
}

export default useMap;
