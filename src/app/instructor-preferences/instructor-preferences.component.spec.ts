import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorPreferencesComponent } from './instructor-preferences.component';

describe('InstructorPreferencesComponent', () => {
  let component: InstructorPreferencesComponent;
  let fixture: ComponentFixture<InstructorPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorPreferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
