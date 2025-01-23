import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificReservesComponent } from './specific-reserves.component';

describe('SpecificReservesComponent', () => {
  let component: SpecificReservesComponent;
  let fixture: ComponentFixture<SpecificReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecificReservesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecificReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
