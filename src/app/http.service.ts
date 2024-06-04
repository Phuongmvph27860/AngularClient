import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ILogin } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7198"
  http = inject(HttpClient);
  constructor() { }

  login(login : ILogin) {
    return this.http.post(this.apiUrl + '/api/User/Login', login);
  }
}
