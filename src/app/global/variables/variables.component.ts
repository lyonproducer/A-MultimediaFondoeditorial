import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
})
export class VariablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  urlApi:string = 'http://127.0.0.1:8000/api';

  urlBase:string = 'http://127.0.0.1:8000';

}
