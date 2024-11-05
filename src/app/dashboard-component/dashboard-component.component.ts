import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertCompComponent } from '../alert-comp/alert-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { EmergencyContactComponent } from '../emergency-contact/emergency-contact.component';
import { LocationService } from '../services/location.service';
import { CommonModule } from '@angular/common';
import { MedicalInfoComponent } from "../medical-info/medical-info.component";
import { MInfoComponent } from "../m-info/m-info.component";
import { FormsModule } from '@angular/forms';
import { ChecklistComponent } from "../checklist/checklist.component";

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, AlertCompComponent, HttpClientModule, EmergencyContactComponent, MedicalInfoComponent, MInfoComponent, ChecklistComponent],
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent {
  currentLocation: { latitude: number, longitude: number } | null = null;
  showDetails = false; // Initial state
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

  // New method to share location details via WhatsApp
  // shareLocation() {
  //   if (this.currentLocation) {
  //     const message = `I'm currently at: Latitude: ${this.currentLocation.latitude}, Longitude: ${this.currentLocation.longitude}`;
  //     const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  //     window.open(whatsappUrl, '_blank');
  //   } else {
  //     console.error('Location is not available');
  //   }
  // }
  shareLocation() {
    if (this.currentLocation) {
      const message = `I'm currently at: Latitude: ${this.currentLocation.latitude}, Longitude: ${this.currentLocation.longitude}`;
      // Add multiple phone numbers separated by commas
      const phoneNumbers = '+919865288712'; // Replace with actual numbers
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumbers}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      console.error('Location is not available');
    }
  }
   // Method to share location details via SMS
  //  shareLocation() {
  //   const message = `I'm currently at: Latitude: ${this.currentLocation?.latitude}, Longitude: ${this.currentLocation?.longitude}`; // Use optional chaining
  //   const smsUrl = `sms:?body=${encodeURIComponent(message)}`;
  //   window.open(smsUrl, '_blank');
  // }

  testFunctio(){
    console.log('testing success')
  }
}
