import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlannerComponent } from './components/planner/planner.component';
import { BusesComponent } from './components/buses/buses.component';
import { StopsComponent } from './components/stops/stops.component';
import { TimetablesComponent } from './components/timetables/timetables.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ReportSchemeComponent } from './components/report-scheme/report-scheme.component';
import { ContactComponent } from './components/contact/contact.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { FaresComponent } from './components/fares/fares.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthorizationComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'planner',
    component: PlannerComponent,
  },
  {
    path: 'buses',
    component: BusesComponent,
  },
  {
    path: 'stops',
    component: StopsComponent,
  },
  {
    path: 'timetables',
    component: TimetablesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'report-scheme',
    component: ReportSchemeComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'vacancies',
    component: VacanciesComponent,
  },
  {
    path: 'news',
    component: AllNewsComponent,
  },
  {
    path: 'fares',
    component: FaresComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
