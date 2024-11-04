import { Component } from '@angular/core';

@Component({
  selector: 'app-m-info',
  standalone: true,
  imports: [],
  templateUrl: './m-info.component.html',
  styleUrl: './m-info.component.css'
})
export class MInfoComponent {
  currentMethodIndex = 0;
 
  firstAidMethods = [
    {
      problem: "Choking",
      method: "Stand behind the person, lean them forward, and give up to 5 back blows between the shoulder blades with the heel of your hand. If this doesn't dislodge the object, perform abdominal thrusts.",
      symptoms: "Inability to breathe, coughing or wheezing, clutching the throat, skin turning blue or pale.",
      warnings: "Do not perform abdominal thrusts if the person is pregnant or an infant. Be careful not to apply excessive force.",
      seekMedicalHelp: "Seek emergency help immediately if the person is unable to cough, speak, or breathe."
    },
    {
      problem: "Burns",
      method: "Cool the burn under running water for 10-20 minutes. Cover the burn with a sterile, non-stick dressing or cloth. Do not apply ice or any greasy substances.",
      symptoms: "Red, painful skin; blisters; swelling; white or charred skin in severe cases.",
      warnings: "Avoid popping blisters, as this increases the risk of infection. Do not apply butter, oils, or any household remedies.",
      seekMedicalHelp: "Seek medical help if the burn is large, causes severe pain, or involves the face, hands, feet, or groin."
    },
    {
      problem: "Severe Bleeding",
      method: "Apply firm pressure with a sterile cloth to stop bleeding. Maintain pressure until the bleeding stops, then wrap the wound securely. Elevate the injured area if possible.",
      symptoms: "Continuous blood loss, pale or cold skin, weakness or dizziness, confusion.",
      warnings: "Do not remove any embedded objects; instead, apply pressure around the object. Avoid using a tourniquet unless absolutely necessary.",
      seekMedicalHelp: "Seek immediate help if the bleeding is heavy, doesn’t stop with pressure, or if the wound is deep or large."
    },
    {
      problem: "Heart Attack",
      method: "Encourage the person to sit down, remain calm, and take deep breaths. Give aspirin if available and not contraindicated. Seek emergency medical assistance immediately.",
      symptoms: "Chest pain or pressure, pain radiating to the arms, neck, or jaw, shortness of breath, sweating, nausea.",
      warnings: "Do not allow the person to walk or exert themselves. Avoid providing anything other than aspirin unless instructed by a professional.",
      seekMedicalHelp: "Call emergency services immediately; heart attacks are life-threatening and require urgent medical intervention."
    },
    {
      problem: "Fractures",
      method: "Immobilize the area by using a splint if available. Apply ice to reduce swelling. Avoid moving the injured limb as much as possible.",
      symptoms: "Pain, swelling, deformity, bruising, inability to move the affected area.",
      warnings: "Do not attempt to realign the bone. Avoid moving the person unless absolutely necessary.",
      seekMedicalHelp: "Seek immediate help if there is a visible deformity, open wound, or if the pain is severe and unmanageable."
    }
  ];
  

  nextMethod() {
    if (this.currentMethodIndex < this.firstAidMethods.length - 1) {
      this.currentMethodIndex++;
    }
  }

  previousMethod() {
    if (this.currentMethodIndex > 0) {
      this.currentMethodIndex--;
    }
  }

}
