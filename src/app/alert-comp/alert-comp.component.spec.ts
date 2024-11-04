import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCompComponent } from './alert-comp.component';

describe('AlertCompComponent', () => {
  let component: AlertCompComponent;
  let fixture: ComponentFixture<AlertCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
