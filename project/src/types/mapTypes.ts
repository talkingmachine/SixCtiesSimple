import {Map} from 'leaflet';

type Point = {
  lat: number;
  lng: number;
  zoom: number;
};

type City = {
  location: Point;
  name: string;
}

type LeafletMap = Map | null;

export type {Point, LeafletMap, City};
