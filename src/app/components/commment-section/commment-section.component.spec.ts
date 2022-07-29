import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmentSectionComponent } from './commment-section.component';

describe('CommmentSectionComponent', () => {
  let component: CommmentSectionComponent;
  let fixture: ComponentFixture<CommmentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommmentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
