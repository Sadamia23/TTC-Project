import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ng-zorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
import { NavbarComponent } from './navbar/navbar.component';
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
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG

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
