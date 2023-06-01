import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTrainingDatesComponent } from './customer-training-dates.component';

describe('CustomerTrainingDatesComponent', () => {
  let component: CustomerTrainingDatesComponent;
  let fixture: ComponentFixture<CustomerTrainingDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTrainingDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTrainingDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
