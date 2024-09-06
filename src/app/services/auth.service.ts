import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

const STORE_BASE_URL = 'http://vps-4373014-x.dattaweb.com:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userTypeSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  handleError(error: any): void {
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      alert('El usuario que intentas registrar ya está en uso.');
    } else if (errorCode === 'auth/invalid-email') {
      alert('El correo no es válido.');
    } else if (errorCode === 'auth/weak-password') {
      alert('La contraseña debe tener al menos seis caracteres.');
    } else {
      alert('Error: ' + error.message);
    }
  }

  registerDB(newUser: User): Observable<any> {
    return this.http.post<any>(`${STORE_BASE_URL}/api/Usuario`, newUser);
  }

  login(user: User): Observable<any>{
    return this.http.post<any>(`${STORE_BASE_URL}/api/Usuario/login`, user);
  }

  setUserType(type: string) {
    this.userTypeSubject.next(type);
  }

  getUserTypeObservable(): Observable<string | null> {
    return this.userTypeSubject.asObservable();
  }

  logout() {
    this.userTypeSubject.next(null);
  }
}
