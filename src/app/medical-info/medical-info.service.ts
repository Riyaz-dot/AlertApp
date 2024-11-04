import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MedicalInfoService {
  private medicalInfoCards = [
    { title: 'Allergies', content: 'No known allergies' },
    { title: 'Medications', content: 'Aspirin 81mg daily' },
    { title: 'Conditions', content: 'Hypertension' },
    { title: 'Immunizations', content: 'Flu shot (2023), COVID-19 vaccine' }
  ];

  constructor(
    private http: HttpClient
){}


  getMedicalInfoCards(): Observable<any[]> {
    return of(this.medicalInfoCards);
  }

  getProfile(): Observable<any>	{
    return this.http.get("http://localhost:3000/firstinfo");
}
}
