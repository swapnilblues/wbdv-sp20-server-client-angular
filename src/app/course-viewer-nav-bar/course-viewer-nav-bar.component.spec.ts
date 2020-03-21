import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewerNavBarComponent } from './course-viewer-nav-bar.component';

describe('CourseViewerNavBarComponent', () => {
  let component: CourseViewerNavBarComponent;
  let fixture: ComponentFixture<CourseViewerNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseViewerNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseViewerNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
