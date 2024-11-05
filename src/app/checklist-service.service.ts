// checklist.service.ts
import { Injectable } from '@angular/core';
import { ChecklistItem, EmergencyChecklist } from './checklist-item.model/checklist-item.model.component';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  private checklists: EmergencyChecklist[] = [
    {
      type: 'Storm',
      items: [
        { id: '1', text: 'Stock up on food and water', isChecked: false },
        { id: '2', text: 'Charge all devices', isChecked: false },
        { id: '3', text: 'Secure outdoor furniture', isChecked: false },
      ],
    },
    {
      type: 'Earthquake',
      items: [
        { id: '4', text: 'Identify safe spots', isChecked: false },
        { id: '5', text: 'Pack an emergency kit', isChecked: false },
      ],
    },
  ];

  getChecklistByType(type: string): ChecklistItem[] {
    return this.checklists.find(checklist => checklist.type === type)?.items || [];
  }

  updateChecklistItem(type: string, itemId: string, isChecked: boolean): void {
    const checklist = this.checklists.find(checklist => checklist.type === type);
    if (checklist) {
      const item = checklist.items.find(item => item.id === itemId);
      if (item) {
        item.isChecked = isChecked;
      }
    }
  }

  // checklist.service.ts (additions for offline support)
  constructor() {
    this.loadChecklistFromStorage();
  }

  private loadChecklistFromStorage(): void {
    const savedData = localStorage.getItem('checklists');
    if (savedData) {
      this.checklists = JSON.parse(savedData);
    }
  }

  private saveChecklistToStorage(): void {
    localStorage.setItem('checklists', JSON.stringify(this.checklists));
  }

  // updateChecklistItem(type: string, itemId: string, isChecked: boolean): void {
  //   const checklist = this.checklists.find(checklist => checklist.type === type);
  //   if (checklist) {
  //     const item = checklist.items.find(item => item.id === itemId);
  //     if (item) {
  //       item.isChecked = isChecked;
  //       this.saveChecklistToStorage(); // Save after each update
  //     }
  //   }
  // }

}
