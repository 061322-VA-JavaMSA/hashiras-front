import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeProfile } from './animeprofile.component';

describe('AnimeProfile', () => {
  let component: AnimeProfile;
  let fixture: ComponentFixture<AnimeProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeProfile ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});