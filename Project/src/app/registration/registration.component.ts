import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  name!: string;
  email!: string; //saba@mail.com
  password!: string; // asdasd
  avatar!: string;

  constructor(private _authService: AuthService) {}

  registerAction() {
    this._authService.register(
      this.name,
      this.email,
      this.password,
      this.avatar
    ).subscribe((data)=>{
      console.log(data);
    });
  }
}
