import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user:any;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userFondoedit'));

    console.log(this.user);
  }

}
