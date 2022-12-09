import L from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { LeafletMap, Point } from '../../types/mapTypes';
import defaultMarkerIcon from '../../img/pin.svg';
import activeMarkerIcon from '../../img/pin-active.svg';
import { useSelectorTyped } from '../../hooks/typedWrappers';
import { activeOfferIdSelector} from '../../store/selectors';

type MapProps = {
  points: Point[];
}

function Map ({points}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map:LeafletMap = useMap(mapRef);
  const markersLayer = map ? L.layerGroup().addTo(map) : null;
  const activeOfferId = useSelectorTyped(activeOfferIdSelector); // при смене страницы не меняется id в store

  useEffect(()=>{
    const defaultMarker = new L.Icon({
      iconUrl: defaultMarkerIcon,
      iconSize: [27, 39],
      iconAnchor: [13.5, 39]
    });
    const activeMarker = new L.Icon({
      iconUrl: activeMarkerIcon,
      iconSize: [27, 39],
      iconAnchor: [13.5, 39]
    });

    if (markersLayer) {
      points.forEach(({lat, lng, id})=>{
        L.marker({
          lat: lat,
          lng: lng,

        })
          .setIcon(activeOfferId === id ? activeMarker : defaultMarker)
          .addTo(markersLayer);
      });
    }
    return () => {
      markersLayer?.clearLayers();
    };
  }, [markersLayer, points, activeOfferId]);

  return (
    <div style={{height: '100%'}} ref={mapRef}>
    </div>);
} // заменить style

export default Map;
