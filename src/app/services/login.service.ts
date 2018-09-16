import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'http://localhost:8000/api';
  constructor(private http:HttpClient) { }

  public signup (data){
    return this.http.post('http://localhost:8000/api/signup',data);
  }
  
  public login (data){
    return this.http.post('http://localhost:8000/api/login',data);
  }

  public sendPaswordReset(data){
    return this.http.post('http://localhost:8000/api/sendPasswordResetLink',data);
  }

  public changePassword(data){
    return this.http.post(`${this.baseURL}/resetPassword`,data);
  }
}
