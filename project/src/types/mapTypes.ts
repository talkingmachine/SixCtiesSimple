import {Map} from 'leaflet';

type Point = {
  lat: number;
  lng: number;
  zoom: number;
};

type LeafletMap = Map | null;

export type {Point, LeafletMap};
