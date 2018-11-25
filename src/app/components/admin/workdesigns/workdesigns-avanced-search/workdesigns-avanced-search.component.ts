import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';
import { UserService } from '../../../../services/admin/user/user.service';
import { Workdesign } from '../../../../Models/Workdesign';
import { NgForm } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-workdesigns-avanced-search',
  templateUrl: './workdesigns-avanced-search.component.html',
  styleUrls: ['./workdesigns-avanced-search.component.css']
})
export class WorkdesignsAvancedSearchComponent implements OnInit {


  users:any[];

  workdesign: Workdesign = {
    id:null,
    user_id:null,
    category_id:null,
    title:null,
    excerpt: null,
    description: null,
    dependency: null,
    file: null,
    publishedDate: null,
    status: null,
    uploadBy: null,
  }

  constructor(public userService:UserService,
    public workdesignService:WorkdesignService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<WorkdesignsAvancedSearchComponent>,
    private snotify:SnotifyService
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

  onSubmit(form : NgForm){
    if(form.value.dependency == null && form.value.title==null && form.value.status == null 
      && form.value.publishedDate==null && form.value.uploadBy==null ){
      this.snotify.error("Ingresa un elemento en la busqueda");
    }else{
      this.getWorkdesignsBySearch(form.value);
    }
  }

  getWorkdesignsBySearch(form) {
    
    this.workdesignService.getWorkdesignsBySearch(form).subscribe(
      (res) => {
        console.log(res);
        
        if(res.length){
          this.workdesignService.workdesigns = res as Workdesign[];
          this.snotify.success("Se encontraron resultados", {timeout:0});
          this.closeDialog();
        }else
        //this.workdesignService.workdesigns = null;
        this.snotify.error("No se encontraron resultados", {timeout:0});
      }
    );
    
  }

  closeDialog() {
    
    this.dialogRef.close();
  }
}
