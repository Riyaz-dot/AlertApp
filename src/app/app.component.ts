import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EmergencyContactComponent } from "./emergency-contact/emergency-contact.component";
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { RouterLink } from '@angular/router';
import { MedicalInfoComponent } from "./medical-info/medical-info.component";
import { MInfoComponent } from "./m-info/m-info.component";
import { MessagingService } from './messaging.service';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { environment } from '../environment';
import { ChecklistComponent } from "./checklist/checklist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, EmergencyContactComponent, DashboardComponentComponent, MedicalInfoComponent, MInfoComponent, ChecklistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessagingService]
})
export class AppComponent {
  title = 'AlertApp';
  private messaging;
  
  constructor(private messagingService: MessagingService){
    // Initialize Firebase
    const app = initializeApp(environment.firebase);
    this.messaging = getMessaging(app);
  }

  ngOnInit() {
    this.messagingService.requestPermission().then((token) => {
      if (token) {
        console.log('Token obtained: ', token);
        // Token is available
      }
    });
    this.messagingService.listenForMessages();
  }


  requestPermission() {
    this.messagingService.requestPermission();
  }
  

  openHelpDialog(): void {
    
    
  }
}
