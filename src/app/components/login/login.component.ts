import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/admin/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  };

  public error = null;

  constructor(private loginService: LoginService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService,
              private userService: UserService 
            ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    console.log(data);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
    this.userService.user = data.user;
    this.handleUser(data.user);
  }

  handleError(error){
    this.error = error.error.error;

  }

  handleUser(user){
    localStorage.setItem('user_name',user.name);
    localStorage.setItem('user_id',user.id);
    localStorage.setItem('user_email',user.email);
  }

}
