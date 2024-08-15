import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFieldErrorComponent } from './ngx-field-error.component';

describe('NgxFieldErrorComponent', () => {
  let component: NgxFieldErrorComponent;
  let fixture: ComponentFixture<NgxFieldErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFieldErrorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
