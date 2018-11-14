import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './test.component.html',
})
export class VariablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //urlApi:string = 'http://127.0.0.1:8000/api';
  urlApi:string = 'back/api';

  //urlBase:string = 'http://127.0.0.1:8000';
  urlBase:string = 'back';



}
