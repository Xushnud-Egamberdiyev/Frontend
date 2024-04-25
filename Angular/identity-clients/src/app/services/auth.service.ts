import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../interfaces/login-request';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {}
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';
  router = Inject(Router)

  login(data: LoginRequest) : Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/User/Login`, data).pipe(
      map((response) =>{
        if(response.isSuccess){
          localStorage.setItem(this.tokenKey, response.token)
        }
          // this.router.navigate(['/register'])
            return response
      })
    );
  }
}
