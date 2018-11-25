import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/admin/user/user.service';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';
import { Workdesign } from '../../../../Models/Workdesign';
import { NgForm } from '@angular/forms';
import { WorkdesignsAvancedSearchComponent } from '../workdesigns-avanced-search/workdesigns-avanced-search.component';
import { MatDialog } from '@angular/material';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-workdesigns-search',
  templateUrl: './workdesigns-search.component.html',
  styleUrls: ['./workdesigns-search.component.css']
})
export class WorkdesignsSearchComponent implements OnInit {

  users:any[];

  title:string;

  constructor(
    private userService:UserService,
    private workdesignService:WorkdesignService,
    public dialog: MatDialog,
    public snotify:SnotifyService
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

    if(form.value.title== '' || form.value.title == null){
      this.snotify.error('Inserte un valor en la barra');
      return
    }

    this.getWorkdesignsByTitleList(form.value.title);
  }

  getWorkdesignsByTitleList(title:string) {
    
    this.workdesignService.getWorkdesignsByTitleList(title).subscribe((res) => {
      if(res.length){
        this.workdesignService.workdesigns = res as Workdesign[];
      }else
      this.snotify.error('No se encontró ningun resultado');
      //this.workdesignService.workdesigns = null;
      //console.log('por titulo',this.workdesignService.workdesigns);
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

  openAvancedSearchDialog(): void {
    const dialogRef = this.dialog.open(WorkdesignsAvancedSearchComponent, {
      width: '50%',
      //data: {id: this.route.snapshot.params.id, editar:false}
    });
  }

  refreshWorkdesignList() {
    this.workdesignService.getWorkdesignsList().subscribe((res) => {
      this.workdesignService.workdesigns = res as Workdesign[];
    });
  }
  
}
