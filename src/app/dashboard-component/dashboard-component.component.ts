import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertCompComponent } from '../alert-comp/alert-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { EmergencyContactComponent } from '../emergency-contact/emergency-contact.component';
import { LocationService } from '../services/location.service';
import { CommonModule } from '@angular/common';
import { MedicalInfoComponent } from "../medical-info/medical-info.component";
import { MInfoComponent } from "../m-info/m-info.component";
// import twilio from 'twilio'; // Import Twilio
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [RouterLink,FormsModule, CommonModule, AlertCompComponent, HttpClientModule, EmergencyContactComponent, MedicalInfoComponent, MInfoComponent],
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent {
  currentLocation: { latitude: number, longitude: number } | null = null;
  showDetails = false; // Initial state
  // private twilioClient: any; // Twilio client
  phoneNumber: string = ''; 

  constructor(private locationService: LocationService) {
    // Initialize Twilio client with your credentials
    // this.twilioClient = twilio('ACe6d965c97753145d5431421be8a38372', 'fee714ce91efcb7e141301467649d0c7');
  }

  toggleDetails() {
    this.showDetails = !this.showDetails; // Toggle details visibility
  }

  ngOnInit() {
    // Subscribe to location updates
    this.locationService.location$.subscribe((location) => {
      if (location) {
        this.currentLocation = location;
        console.log('Updated Location:', location);
      }
    });
  }

  // Start tracking when button is clicked
  startTracking() {
    this.locationService.startTracking();
  }

  // Optional: Stop tracking when button is clicked
  stopTracking() {
    this.locationService.stopTracking();
    console.log('function is happening')
  }

  // New method to share location details via SMS
  // shareLocation(phoneNumber: string) {
  //   if (this.currentLocation) {
  //     const message = `Current Location: Latitude ${this.currentLocation.latitude}, Longitude ${this.currentLocation.longitude}`;
  //     this.twilioClient.messages.create({
  //       body: message,
  //       from: '7092346366', // Your Twilio phone number
  //       to: phoneNumber // Recipient's phone number
  //     })
  //     .then((message: any) => console.log('Message sent:', message.sid))
  //     .catch((error: any) => console.error('Error sending message:', error));
  //   } else {
  //     console.log('No location to share.');
  //   }
  // }

  testFunctio(){
    console.log('testing success')
  }
}
