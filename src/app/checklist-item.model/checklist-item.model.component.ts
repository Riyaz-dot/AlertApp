import { Component } from '@angular/core';

@Component({
  selector: 'app-checklist-item.model',
  standalone: true,
  imports: [],
  templateUrl: './checklist-item.model.component.html',
  styleUrl: './checklist-item.model.component.css'
})
export class ChecklistItemModelComponent {

}

// checklist-item.model.ts
export interface ChecklistItem {
  id: string;
  text: string;
  isChecked: boolean;
}

export interface EmergencyChecklist {
  type: string;
  items: ChecklistItem[];
}