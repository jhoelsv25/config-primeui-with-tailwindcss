import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserData } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _http = inject(HttpClient);
  public apiUrl = 'http://localhost:3000/api';

  getUsers(): Observable<UserData> {
    return this._http.get<UserData>(`${this.apiUrl}/users?limit=10&skip=0`);
  }
  getByQuery(query: string): Observable<UserData> {
    return this._http.get<UserData>(`${this.apiUrl}/users/search?q=${query}`);
  }
  getUserByPagination(limit: number, skip: number): Observable<UserData> {
    return this._http.get<UserData>(`${this.apiUrl}/users?limit=${limit}&skip=${skip * limit}`);
  }

  removeUser(id: string) {
    const api = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this._http.delete(api);
  }

  getUserById(id: string) {
    return this._http.get<User>(`${this.apiUrl}/users/${id}`);
  }
}
