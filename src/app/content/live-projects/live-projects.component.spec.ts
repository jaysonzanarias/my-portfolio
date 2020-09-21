import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectsComponent } from './live-projects.component';

describe('LiveProjectsComponent', () => {
  let component: LiveProjectsComponent;
  let fixture: ComponentFixture<LiveProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
