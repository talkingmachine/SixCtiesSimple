import {useState, MutableRefObject, useRef, useEffect} from 'react';
import L, {LatLng, Map} from 'leaflet';
import { currentCityLocationSelector } from '../store/selectors';
import { useSelectorTyped } from './typedWrappers';

function useMap(mapRef:MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const center = useSelectorTyped(currentCityLocationSelector);


  useEffect(()=>{
    if (mapRef.current && isRenderedRef.current && map) {
      const latLng = new LatLng(center.lat, center.lng);
      map.setView(latLng, center.zoom);
      return;
    }

    if (mapRef.current && !isRenderedRef.current) {
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
    }}, [mapRef, center, map]);

  return map;
}

export default useMap;
