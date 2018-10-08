import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from '../global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient,
    private variable:VariablesComponent
  ) { }

  public signup (data){
    return this.http.post(this.variable.urlApi + '/signup',data);
  }
  
  public login (data){
    return this.http.post(this.variable.urlApi + '/login',data);
  }

  public sendPaswordReset(data){
    return this.http.post(this.variable.urlApi + '/sendPasswordResetLink',data);
  }

  public changePassword(data){
    return this.http.post(this.variable.urlApi + '/resetPassword',data);
  }
}
