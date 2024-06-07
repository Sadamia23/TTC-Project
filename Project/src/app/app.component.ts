import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private authService: AuthService
  ) {
    this.translateService.setDefaultLang('ka');
    this.translateService.use(localStorage.getItem('lang') || 'ka');

    authService.getData()
  }
  title = 'Project';
}
