import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css',
})
export class PlannerComponent implements OnInit {
  // Eifel Tower Location for fun :)
  lat: number = 48.858093;
  lng: number = 2.294694;

  ngOnInit(): void {
    this.init();
  }

  init() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setUpMap([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        this.setUpMap([this.lng, this.lat]);
        console.error('Error getting user location:', error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }

  setUpMap(coords: [number, number]) {
    const map = new mapboxgl.Map({
      container: 'map',
      style: environment.mapbox.styles,
      center: coords,
      zoom: 12,
      accessToken: environment.mapbox.mapboxAccessToken,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
  }
}
