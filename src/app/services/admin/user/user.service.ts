import { Injectable } from '@angular/core';

import { User } from 'src/app/Models/User';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from '../../../global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  
  constructor(
    private http: HttpClient,
    private variable:VariablesComponent
  ) { }


  getUsers(){
    return this.http.get<any[]>(this.variable.urlApi + '/usersName');
  }

}
