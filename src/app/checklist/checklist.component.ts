
import { Component, Input, OnInit } from '@angular/core';
import { ChecklistService } from '../checklist-service.service';
import { ChecklistItem } from '../checklist-item.model/checklist-item.model.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {
  @Input() emergencyType: string ='';
  // checklistItems: ChecklistItem[];
  checklistItems: ChecklistItem[] = [];


  constructor(private checklistService: ChecklistService) {}

  ngOnInit(): void {
    this.loadChecklist();
  }

  loadChecklist(): void {
    this.checklistItems = this.checklistService.getChecklistByType(this.emergencyType);
  }

  toggleItemChecked(item: ChecklistItem): void {
    item.isChecked = !item.isChecked;
    this.checklistService.updateChecklistItem(this.emergencyType, item.id, item.isChecked);
  }


}
