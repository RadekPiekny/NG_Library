import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdElevationComponent } from './md-elevation.component';

describe('MdElevationComponent', () => {
  let component: MdElevationComponent;
  let fixture: ComponentFixture<MdElevationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdElevationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
