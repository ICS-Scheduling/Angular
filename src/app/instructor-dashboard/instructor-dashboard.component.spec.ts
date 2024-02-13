import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent {
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  times = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

  // This object will hold the availability slots
  availability: {[day: string]: {[time: string]: string}} = {};

  constructor() {
    // Initialize the availability object
    this.days.forEach(day => {
      this.availability[day] = {};
      this.times.forEach(time => {
        this.availability[day][time] = ''; // Empty string indicates no preference
      });
    });
  }

  // Toggles the slot between available/unavailable
  toggleSlot(day: string, time: string) {
    if (this.availability[day][time]) {
      this.availability[day][time] = '';
    } else {
      this.availability[day][time] = 'available';
    }
  }

  // Gets the class for the slot based on its state
  getClassForSlot(day: string, time: string) {
    return {
      'available-slot': this.availability[day][time] === 'available',
      'unavailable-slot': !this.availability[day][time]
    };
  }
}
