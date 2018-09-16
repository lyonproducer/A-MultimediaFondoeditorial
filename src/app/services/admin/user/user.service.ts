import { Injectable } from '@angular/core';

import { User } from 'src/app/Models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  constructor(private http: HttpClient) { }


}
