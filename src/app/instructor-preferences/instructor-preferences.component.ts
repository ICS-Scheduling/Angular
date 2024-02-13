import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-preferences',
  standalone: true,
  imports: [],
  templateUrl: './instructor-preferences.component.html',
  styleUrl: './instructor-preferences.component.css'
})
export class InstructorPreferencesComponent {
  preferenceLevels = {
    first: '1st preference',
    second: '2nd preference',
    third: '3rd preference',
    unavailable: 'Not available'
  };

  days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];

  preferences: { [key: string]: { [key: string]: string } } = {};

  constructor() {
    for (let day of this.days) {
      this.preferences[day] = {};
      for (let hour of this.hours) {
        this.preferences[day][hour] = this.preferenceLevels.unavailable;
      }
    }
  }

  togglePreference(day: string, hour: string) {
    const currentPreference = this.preferences[day][hour];
    if (currentPreference === this.preferenceLevels.unavailable) {
      this.preferences[day][hour] = this.preferenceLevels.first;
    } else if (currentPreference === this.preferenceLevels.first) {
      this.preferences[day][hour] = this.preferenceLevels.second;
    } else if (currentPreference === this.preferenceLevels.second) {
      this.preferences[day][hour] = this.preferenceLevels.third;
    } else {
      this.preferences[day][hour] = this.preferenceLevels.unavailable;
    }
  }

  getPreferenceClass(preference: string): string {
    switch (preference) {
      case this.preferenceLevels.first:
        return 'first-preference';
      case this.preferenceLevels.second:
        return 'second-preference';
      case this.preferenceLevels.third:
        return 'third-preference';
      case this.preferenceLevels.unavailable:
      default:
        return 'not-available';
    }
  }

  onSubmit() {
    console.log('Preferences submitted:', this.preferences);
  }
}
