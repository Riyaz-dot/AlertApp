import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emergency-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergency-contact.component.html',
  styleUrl: './emergency-contact.component.css'
})
export class EmergencyContactComponent {
  phoneNumber: string = '1234567890';



  contacts: { name: string; number: string }[] = [
    { name: 'Father', number: '1234567890' },
    { name: 'Jane Smith', number: '0987654321' },
    { name: 'Emergency Services', number: '112' },
    { name: 'Police', number: '100' },
    { name: 'Fire Department', number: '101' },
    { name: 'Ambulance', number: '102' },
    { name: 'Poison Control', number: '1800-112-222' }
  ];

  makeCall(number: string) {
    if (number) {
      window.location.href = `tel:${number}`;
    }
  }

}
