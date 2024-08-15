import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGuideComponent } from './popup-guide.component';

describe('PopupGuideComponent', () => {
  let component: PopupGuideComponent;
  let fixture: ComponentFixture<PopupGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupGuideComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
