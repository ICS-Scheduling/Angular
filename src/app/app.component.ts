import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ICS Scheduler';

  constructor(private router: Router) {}

  emisLogin(): void {
    // Handle EMIS login logic or navigation
    console.log('EMIS login');
  }

  instructorLogin(): void {
    // Handle Instructor login logic or navigation
    console.log('Instructor login');
    this.router.navigate(['/instructor-dashboard']);
  }

  adminLogin(): void {
    // Handle Admin login logic or navigation
    console.log('Admin login');
  }

  departmentChairLogin(): void {
    console.log('Department Chair login');
  }

  seeMoreEmis(): void {
    console.log('See more about EMIS login');
  }

  seeMoreInstructor(): void {
    console.log('See more about Instructor login');
  }

  seeMoreAdmin(): void {
    console.log('See more about Admin login');
  }

  seeMoreDepartmentChair(): void {
    console.log('See more about Department Chair login');
  }
}
