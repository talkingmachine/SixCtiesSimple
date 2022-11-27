import {Map} from 'leaflet';

type point = {
  lat: number;
  lng: number;
  zoom: number;
};
type LeafletMap = Map | null;

export type {point, LeafletMap};
