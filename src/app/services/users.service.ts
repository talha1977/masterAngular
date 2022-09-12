import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../again-check-http/again-check-http.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'https://jsonplaceholder.typicode.com/todos/';
  constructor(private http: HttpClient) {}

  errorHandleUsers(err: any) {
    console.log(err);
  }

  completed() {
    console.log('completed');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getSpecifiedUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + `/${id}`);
  }
  postUser(data: User): Observable<User> {
    return this.http.post<User>(this.url, data);
  }
  deleteUser(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + `/${id}`);
  }
  updateUser(data: User): Observable<User> {
    return this.http.put<User>(this.url + `/${data.id}`, data);
  }
  patchUser(data: User): Observable<User> {
    return this.http.patch<User>(this.url + `/${data.id}`, data);
  }
}
