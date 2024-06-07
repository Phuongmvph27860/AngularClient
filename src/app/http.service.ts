import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ILogin } from '../interface/login';
import { IFogotPassword } from '../interface/fogotpassword';
import { IUser } from '../interface/user';
import { IChangePassword } from '../interface/changepassword';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7198"
  http = inject(HttpClient);
  constructor() { }

  login(login : ILogin) {
    return this.http.post<IUser>(this.apiUrl + '/api/User/Login', login);
  }

  fogotpassword(fogotpassword : IFogotPassword) {
    return this.http.post(this.apiUrl + '/api/User/FogotPassword', fogotpassword);
  }

  getuserbyid(id: string) {
    return this.http.get<IUser>(this.apiUrl + '/api/User/GetUser/' + id);
  }

  changepassword(id: string, changepassword:IChangePassword){
    return this.http.put(this.apiUrl + '/api/User/ChangePassword/' + id, changepassword);
  }


}
