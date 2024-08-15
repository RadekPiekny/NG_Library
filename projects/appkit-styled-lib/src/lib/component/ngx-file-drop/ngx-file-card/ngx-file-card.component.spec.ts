import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFileCardComponent } from './ngx-file-card.component';

describe('NgxFileCardComponent', () => {
  let component: NgxFileCardComponent;
  let fixture: ComponentFixture<NgxFileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFileCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
