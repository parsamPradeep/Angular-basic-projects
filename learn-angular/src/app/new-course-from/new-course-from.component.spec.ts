import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFromComponent } from './new-course-from.component';

describe('NewCourseFromComponent', () => {
  let component: NewCourseFromComponent;
  let fixture: ComponentFixture<NewCourseFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCourseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
