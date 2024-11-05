import { Component } from '@angular/core';

@Component({
  selector: 'app-checklist-item',
  standalone: true,
  imports: [],
  templateUrl: './checklist-item.component.html',
  styleUrl: './checklist-item.component.css'
})
export class ChecklistItemComponent {

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
