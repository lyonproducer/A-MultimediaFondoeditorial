import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/admin/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form = {
    name:null,
    email:null,
    password:null,
    password_confirmation:null
  };
  
  public error = [];

  constructor(private loginService:LoginService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService,
              private userService: UserService  
            ) {  }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
    this.userService.user = data.user;
    this.handleUser(data.user); 
  }

  handleError(error){
    this.error = error.error.errors;

  }

  handleUser(user){
    
    let data:any = JSON.stringify(user);
    localStorage.setItem('userFondoedit',data)
  }

}
