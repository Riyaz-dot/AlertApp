import { Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { MedicalInfoComponent } from './medical-info/medical-info.component';
import { MInfoComponent } from './m-info/m-info.component';
import { MedicalInfoDetailComponent } from './medical-info-detail/medical-info-detail.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect empty path to dashboard
  { path: 'dashboard', component: DashboardComponentComponent, pathMatch: 'full' },
  { path: 'emergency', component: EmergencyContactComponent },  
  { path: 'medicalinfo', component: MedicalInfoComponent }, 
  { path: 'M-info', component: MInfoComponent },
  { path: 'medical-info/:type', component: MedicalInfoDetailComponent },
];

