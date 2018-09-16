import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email:null
  };

  constructor(
    private login:LoginService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.notify.info('wait...',{timeout:2000});
    this.login.sendPaswordReset(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  //Maneja la respuesta
  handleResponse(res){
    this.notify.success(res.data,{timeout:0});
    this.form.email = null;
  }
}
