import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistItemModelComponent } from './checklist-item.model.component';

describe('ChecklistItemModelComponent', () => {
  let component: ChecklistItemModelComponent;
  let fixture: ComponentFixture<ChecklistItemModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistItemModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChecklistItemModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
