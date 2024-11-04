import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-info-detail',
  templateUrl: './medical-info-detail.component.html',
  styleUrls: ['./medical-info-detail.component.css']
})
export class MedicalInfoDetailComponent implements OnInit {
  selectedSection: string = '';
  
  cardInfo = {
    blood: {
      title: 'Blood Donation Information',
      details: [
        'Find nearest blood banks',
        'Check blood availability',
        'Schedule a donation appointment',
        'Emergency blood requests',
        'Donation eligibility criteria',
        'Types of blood donations',
        'What to expect during donation',
        'Post-donation care'
      ]
    },
    firstAid: {
      title: 'First Aid Information',
      details: [
        'Basic first aid procedures',
        'Emergency response steps',
        'First aid kit essentials',
        'CPR guidelines',
        'Wound care',
        'Burn treatment',
        'Fracture management',
        'Choking response'
      ]
    },
    // Add other card information similarly
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedSection = params['type'];
    });
  }
} 