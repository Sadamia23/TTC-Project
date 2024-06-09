import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ng-zorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderBottomComponent } from './components/header-bottom/header-bottom.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgNavigationComponent } from './components/img-navigation/img-navigation.component';
import { NewsComponent } from './components/news/news.component';
import { PlannerComponent } from './components/planner/planner.component';
import { TimetablesComponent } from './components/timetables/timetables.component';
import { StopsComponent } from './components/stops/stops.component';
import { BusesComponent } from './components/buses/buses.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReportSchemeComponent } from './components/report-scheme/report-scheme.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';

// PrimeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleriaModule } from 'primeng/galleria';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { FaresComponent } from './components/fares/fares.component';
import { ErrorComponent } from './components/error/error.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

registerLocaleData(en);

register();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderBottomComponent,
    HomeComponent,
    AuthorizationComponent,
    RegistrationComponent,
    ProfileComponent,
    FooterComponent,
    ImgNavigationComponent,
    NewsComponent,
    PlannerComponent,
    TimetablesComponent,
    StopsComponent,
    BusesComponent,
    AboutUsComponent,
    ContactComponent,
    ReportSchemeComponent,
    VacanciesComponent,
    AllNewsComponent,
    FaresComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    GalleriaModule,
    NzPaginationModule,
    ProgressSpinnerModule,
    SidebarModule,
    ButtonModule,
  ],
  providers: [
    HttpClient,
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
