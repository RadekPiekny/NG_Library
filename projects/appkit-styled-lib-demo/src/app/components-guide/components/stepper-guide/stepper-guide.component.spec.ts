import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperGuideComponent } from './stepper-guide.component';

describe('StepperGuideComponent', () => {
  let component: StepperGuideComponent;
  let fixture: ComponentFixture<StepperGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperGuideComponent]
    });
    fixture = TestBed.createComponent(StepperGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
