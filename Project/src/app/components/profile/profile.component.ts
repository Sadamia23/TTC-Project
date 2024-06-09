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
  isLoading: boolean = false;

  constructor(private _authService: AuthService) {
    this.showSpinner();

    setTimeout(() => {
      this._authService.getProfile().subscribe(
        (data) => {
          this.profileData = data;
          this.hideSpinner();
        },
        (error) => {
          console.log(error);
          this.hideSpinner();
        }
      );
    }, 1000);
  }

  showSpinner() {
    this.isLoading = true;
  }

  hideSpinner() {
    this.isLoading = false;
  }
}
