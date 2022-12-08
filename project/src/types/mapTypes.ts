import {Map} from 'leaflet';

type Point = {
  lat: number;
  lng: number;
  zoom: number;
  id?:number;
};

type City = {
  location: Point;
  name: string;
}

type LeafletMap = Map | null;

export type {Point, LeafletMap, City};
