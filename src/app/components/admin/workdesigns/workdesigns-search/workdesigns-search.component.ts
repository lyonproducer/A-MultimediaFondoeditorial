import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/admin/user/user.service';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';
import { Workdesign } from '../../../../Models/Workdesign';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-workdesigns-search',
  templateUrl: './workdesigns-search.component.html',
  styleUrls: ['./workdesigns-search.component.css']
})
export class WorkdesignsSearchComponent implements OnInit {

  users:any[];

  constructor(
    private userService:UserService,
    private workdesignService:WorkdesignService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){

    this.userService.getUsers().subscribe(

      data => {
        //console.log(data);
        this.users = data;
      }
    );
  }

  refreshWorkdesignUsersList(id:number) {
    this.workdesignService.getWorkdesignsByUserList(id).subscribe((res) => {
      this.workdesignService.workdesigns = res as Workdesign[];
    });
  }


  onSubmit(form:NgForm){
    console.log("busqueda de title", form.value);
    this.getWorkdesignsByTitleList(form.value.title);
  }

  getWorkdesignsByTitleList(title:string) {
    
    this.workdesignService.getWorkdesignsByTitleList(title).subscribe((res) => {
      if(res.length){
        this.workdesignService.workdesigns = res as Workdesign[];
      }else
      this.workdesignService.workdesigns = null;
      console.log('por titulo',this.workdesignService.workdesigns);
    });
    
  }

  getWorkdesignsByDependencyList(dependency:string) {
    
    this.workdesignService.getWorkdesignsByDependencyList(dependency).subscribe((res) => {
      if(res.length){
        this.workdesignService.workdesigns = res as Workdesign[];
      }else
      this.workdesignService.workdesigns = null;
      console.log('dependencia',this.workdesignService.workdesigns);
    });
    
  }

  getWorkdesignsByStatusList(status:string) {
    
    this.workdesignService.getWorkdesignsByStatusList(status).subscribe((res) => {
      if(res.length){
        this.workdesignService.workdesigns = res as Workdesign[];
      }else
      this.workdesignService.workdesigns = null;
      console.log('status',this.workdesignService.workdesigns);
    });
    
  }

  

}
