import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIBuilder } from '../../apiBuilder';
import { IUser } from '../interfaces/user.model';
import { IToken } from '../interfaces/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  isAuthorised() {
    // შეეცდება რომ ამოიღოს ტოკენი
    let token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  login(email: string, password: string) {
    return this._http.post<IToken>(APIBuilder.getEndpoint('auth/login'), {
      email: email,
      password: password,
    });
  }

  getProfile() {
    let token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this._http.get<IUser>(APIBuilder.getEndpoint('auth/profile'), {
      headers: headers,
    });
  }

  register(name: string, email: string, password: string, avatar: string) {
    return this._http.post(APIBuilder.getEndpoint('users/'), {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    });
  }

  getData() {
    this._http
      .get(
        APIBuilder.useProxy(
          'https://europop.ge/api/featured-posts'
        )
      )
      .subscribe((data) => console.log(data));
  }
}
