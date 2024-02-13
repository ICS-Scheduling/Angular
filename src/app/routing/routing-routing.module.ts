import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorDashboardComponent } from '../instructor-dashboard/instructor-dashboard.component';
import { InstructorPreferencesComponent } from '../instructor-preferences/instructor-preferences.component';

const routes: Routes = [
  { path: 'instructor-dashboard', component: InstructorDashboardComponent },
  { path: 'instructor-preferences', component: InstructorPreferencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
