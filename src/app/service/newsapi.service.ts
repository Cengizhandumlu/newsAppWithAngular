import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  //top headline api url
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5aa3104c4eee45b5a9592981e570e6d6';

  //tech news api url
  techNews = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=5aa3104c4eee45b5a9592981e570e6d6';

  //business news api url
  businessNews = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5aa3104c4eee45b5a9592981e570e6d6'

  getHeadlines(): Observable<any> {
    return this.http.get(this.topHeadlinesNews);
  }

  getTech(): Observable<any> {
    return this.http.get(this.techNews);
  }

  getBusiness(): Observable<any> {
    return this.http.get(this.businessNews);
  }

}
