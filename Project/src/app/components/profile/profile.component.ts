import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profileData!: IUser;

  constructor(private _authService: AuthService) {
    this._authService.getProfile().subscribe((data) => {
      console.log(data);
      this.profileData = data;
    });
  }
}
