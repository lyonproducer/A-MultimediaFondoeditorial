import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error :any = [];

  public form = {
    email:null,
    password: null,
    password_confirmation:null,
    resetToken:null
  }

  constructor(
    private route:ActivatedRoute,
    private login: LoginService,
    private router:Router,
    private notify: SnotifyService
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.login.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
let _router = this.router;

    this.notify.confirm('Now login with new password','Done!',{
      buttons:[
        {text: 'Okay',
        action: toster=>{
          _router.navigateByUrl('/login'),
          this.notify.remove(toster.id)
        }
      }
      ]
    })
  }

  handleError(error){
    this.error = error.error.errors;
    
  }

}
