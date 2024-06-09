import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIBuilder } from '../../apiBuilder';
import { environment } from '../../environments/environment';
import { INewsData } from '../interfaces/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private _http: HttpClient) {}

  // TTC სიახლეების API დაბლოკილი იყო ამიტომ რენდომ API-ს ვიყენებ რომ კომპონენტი გაუკეთებელი არ დარჩეს.
  getNews() {
    return this._http.get<INewsData>(APIBuilder.getNews(environment.news.apiKey));
  }
}
