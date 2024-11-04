import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EmergencyContactComponent } from "./emergency-contact/emergency-contact.component";
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { RouterLink } from '@angular/router';
import { MedicalInfoComponent } from "./medical-info/medical-info.component";
import { MInfoComponent } from "./m-info/m-info.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, EmergencyContactComponent, DashboardComponentComponent, MedicalInfoComponent, MInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlertApp';
  

  openHelpDialog(): void {
    
    
  }
}
