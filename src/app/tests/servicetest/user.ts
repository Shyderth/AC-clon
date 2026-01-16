import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface user {
  id: number;
  name: string;
  email: string;
}


@Injectable({
  providedIn: 'root',
})
export class User {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl);
  }

}
