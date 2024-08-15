import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationGuideComponent } from './pagination-guide.component';

describe('PaginationGuideComponent', () => {
  let component: PaginationGuideComponent;
  let fixture: ComponentFixture<PaginationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationGuideComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
