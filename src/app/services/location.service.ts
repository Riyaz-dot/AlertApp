import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  // Observable for real-time location updates
  private locationSubject = new BehaviorSubject<{ latitude: number, longitude: number } | null>(null);
  location$ = this.locationSubject.asObservable();

  constructor() { }

  // Function to start watching the user's location
  startTracking() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          this.locationSubject.next(coords);
        },
        (error) => console.error('Error obtaining location', error),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  // Function to stop tracking location (optional)
  stopTracking() {
    this.locationSubject.next(null);
  }
}
