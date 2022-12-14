import L from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { LeafletMap, Point } from '../../types/mapTypes';
import defaultMarkerIcon from '../../img/pin.svg';
import activeMarkerIcon from '../../img/pin-active.svg';
import { useSelectorTyped } from '../../hooks/typedWrappers';
import { activeOfferIdSelector, currentOfferSelector} from '../../store/selectors';

type MapProps = {
  points: Point[];
  renderedOnPropertyPage: boolean;
}

function Map ({points, renderedOnPropertyPage}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map:LeafletMap = useMap(mapRef);
  const markersLayer = map ? L.layerGroup().addTo(map) : null;
  const activeOfferId = useSelectorTyped(activeOfferIdSelector);
  const offerPoint = useSelectorTyped(currentOfferSelector)?.location;

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
          .setIcon(!renderedOnPropertyPage && activeOfferId === id ? activeMarker : defaultMarker)
          .addTo(markersLayer);
      });
      if (renderedOnPropertyPage && offerPoint) {
        L.marker({
          lat: offerPoint.latitude,
          lng: offerPoint.longitude,
        }).setIcon(activeMarker)
          .addTo(markersLayer);
      }
    }
    return () => {
      markersLayer?.clearLayers();
    };
  }, [markersLayer, points, activeOfferId, renderedOnPropertyPage, offerPoint]);

  return (
    <div style={{height: '100%'}} ref={mapRef}>
    </div>);
}

export default Map;
