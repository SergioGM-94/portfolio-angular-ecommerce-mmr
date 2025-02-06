import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const STORE_BASE_URL = 'https://portfolio-ecommerce-mmr.onrender.com';
// const STORE_BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  listUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(
      `${STORE_BASE_URL}/api/user`
    )
  }

  public createUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${STORE_BASE_URL}/api/user`, user);
    }

  public getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${STORE_BASE_URL}/api/user/${id}`);
    }

  public updateUser(id: number, user: User): Observable<any> {
    return this.httpClient.put(`${STORE_BASE_URL}/api/user/${id}`, user);
    }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${STORE_BASE_URL}/api/user/${id}`);
    }
}
