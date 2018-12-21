import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GithubApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubApiProvider {
  private url = 'https://api.github.com';
  private version = 'v3';

  constructor(private http: HttpClient) {
    console.log('Hello GithubApiProvider Provider');
  }

  private getAcceptHeader(): string {
    return `application/vnd.github.${this.version}+json`;
  }

  searchRepositories(
    searchTerm: string,
    per_page?: number,
    page?: number
  ): Observable<object> {
    return this.http.get(`${this.url}/search/repositories`, {
      headers: {
        Accept: this.getAcceptHeader()
      },
      params: {
        q: searchTerm,
        per_page: per_page ? per_page.toString() : '1',
        page: page ? page.toString() : '10'
      }
    });
  }

  getRepositories(username: string): Observable<object> {
    return this.http.get(`${this.url}/users/${username}/repos`, {
      headers: {
        Accept: this.getAcceptHeader()
      }
    });
  }

  getUser(username: string): Observable<object> {
    return this.http.get(`${this.url}/users/${username}`, {
      headers: {
        Accept: this.getAcceptHeader()
      }
    });
  }
}
