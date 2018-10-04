import { Component, OnInit, Inject } from '@angular/core';
import { Work } from '../../../../../Models/Work';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WorkService } from '../../../../../services/admin/work/work.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {

  open: boolean=false;
  editar:boolean = false;
  form:FormData = new FormData();
  fotoFile:any;

  work: Work = {
    id:null,
    work_design_id:null,
    title:null,
    description: null,
    file: null,
    type: null,
  }

  constructor(
    private route:ActivatedRoute,
    public dialogRef: MatDialogRef<WorkFormComponent>,
    private workService:WorkService,
    private notify:SnotifyService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log("datos del dialog", JSON.stringify(this.data));
    this.work.work_design_id = this.data.id;

    if(this.data.editar == true){
      this.editar=true;
    }
  }

  openComponent(){
    this.open=!this.open;
  }

  onFileSelected(event){
    let elemento = event.target;
    if(elemento.files.length > 0){

      //let formData = new FormData();
      //formData.append('file',elemento.files[0]);
      //this.foto = formData;
      //console.log(formData);
      this.fotoFile = elemento.files[0];
      
      console.log(elemento.files[0]);
    }
  }

  onSubmit(form:NgForm){
    this.work = form.value;

    //if(this.fotoFile){
    //  this.work.file = this.fotoFile;
    // }

    let formData = new FormData();
    formData.append('file',this.fotoFile);
    formData.append('fileName',this.fotoFile.name);
    formData.append('work_design_id',form.value.work_design_id);
    formData.append('title',form.value.title);
    formData.append('type',form.value.type);
    formData.append('description',form.value.description);
    

    console.log("datos del formulario", this.work);
    
    this.workService.postWork(formData).subscribe(
      data => {

        console.log("data guardada", data);
        this.notify.success("Complemento añadido correctamente",{timeout:0});
        this.refreshWorksList(this.work.work_design_id);
        this.closeDialog(); 
      },
      error=>{
        this.notify.error("Error",{timeout:0});
      }
    );
    
    //agregar nombre a los work designs 
  }


  closeDialog() {
    this.dialogRef.close();
  }

  refreshWorksList(id:number) {
    this.workService.getWorks(id).subscribe(
      res => {
        console.log("lista actualizada complementos", res);
        this.workService.works = res as Work[];
        //this.works = res;
      }
    );
  }



}
