import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-info',
  standalone: true,
  imports: [
    MatToolbarModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    MatButtonModule,CommonModule,
    
  ],
  templateUrl: './medical-info.component.html',
  styleUrl: './medical-info.component.css'
})
export class MedicalInfoComponent {
  medicalInfoCards: any;
  showDetails = false;
  activeModal: string | null = null;
  selectedSection: string | null = null;

  @ViewChild('methodContainer') methodContainer!: ElementRef;

  // Method to scroll to container
  scrollToContainer() {
    this.methodContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails; // Toggle details visibility
  }

  openModal(modalType: string) {
    this.activeModal = modalType;
    console.log(this.activeModal,'working');
  }

  closeModal() {
    this.activeModal = null;
  }

  toggleInfo(section: string) {
    this.selectedSection = this.selectedSection === section ? null : section;
  }
}
