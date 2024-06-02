import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IToken } from '../interfaces/token.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
})
export class AuthorizationComponent {
  email!: string;
  password!: string;
  isWrong: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {}

  loginAction() {
    this._authService
      .login(this.email, this.password)
      .subscribe((data: IToken) => {
        localStorage.setItem('token', data.access_token);
        this._router.navigate(['/profile']);
      });
  }
}
