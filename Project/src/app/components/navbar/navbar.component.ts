import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  sidebarVisible2: boolean = false;

  isEng: boolean = false;
  isGeo: boolean = true;

  lang: string = '';

  sidebarVisible: boolean = false;

  constructor(
    private translateService: TranslateService,
    public authService: AuthService,
    private router: Router
  ) {}
  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'ka';
  }
  ChangeToEng() {
    localStorage.setItem('lang', 'en');
    this.isGeo = false;
    this.isEng = true;
    this.translateService.use('en');
  }

  ChangeToGeo() {
    localStorage.setItem('lang', 'ka');
    this.isEng = false;
    this.isGeo = true;
    this.translateService.use('ka');
  }
}
