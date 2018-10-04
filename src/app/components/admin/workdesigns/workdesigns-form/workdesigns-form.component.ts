import { Component, OnInit } from '@angular/core';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';
import { Workdesign } from '../../../../Models/Workdesign';
import { CategoryService } from '../../../../services/admin/category/category.service';
import { Category } from '../../../../Models/Category';
import { UserService } from '../../../../services/admin/user/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-workdesigns-form',
  templateUrl: './workdesigns-form.component.html',
  styleUrls: ['./workdesigns-form.component.css']
})
export class WorkdesignsFormComponent implements OnInit {

  //selectedFile: File= null;
  foto:FormData = new FormData();

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
  }

  constructor(private workdesignService:WorkdesignService, 
              private categoryService:CategoryService,
              private userService:UserService,
              private router: Router,
              private notify: SnotifyService,
              private http:HttpClient) { }

  ngOnInit() {
    if(this.workdesignService.editar){
      this.workdesign = this.workdesignService.selectedWorkdesign;
      console.log('tiene datos toca update',this.workdesign); 
    }else {
      console.log('datos nuevos toca crear');
      this.refreshCategoryList();
      let data = localStorage.getItem('userFondoedit');
      data = JSON.parse(data);
      //console.log(data);
      this.workdesign.user_id = Number(data['id']);
    }
  }

  refreshCategoryList() {
    this.categoryService.getCategoriesList().subscribe((res) => {
      this.categoryService.categories = res as Category[];
    });
  }

  asignCategoryID(event){
    console.log("cambio de categoria");

    for (let i =0 ; i < this.categoryService.categories.length;i++){
      if (this.categoryService.categories[i].name == event){
        this.workdesign.category_id = this.categoryService.categories[i].id;
        return i;
      }
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    //this.workdesignService.selectedWorkdesign = null;
  }

  onFileSelected(event){
    let elemento = event.target;
    if(elemento.files.length > 0){
      let formData = new FormData();
      formData.append('file',elemento.files[0]);
      this.foto = formData;
    }
  }

  onUploadPhoto(id?:number){
    this.workdesignService.postFile(this.foto,id).subscribe(
      data => {
        console.log(data);
        this.notify.success("Imagen cargada sin problemas",{timeout:0});
        this.router.navigateByUrl('/workdesigns');
    });    
  }

  onSubmit(form: NgForm) {
    
    if (form.value.id == null) {
      //console.log(form.value);
      this.workdesignService.postWorkdesign(form.value).subscribe((res) => {
        this.notify.success("Diseño añadido correctamente",{timeout:0});
        console.log(res);
        this.resetForm(form);
        if(this.foto){
          this.onUploadPhoto(0);
        }else
        this.router.navigateByUrl('/workdesigns');
      });
    }
    else {
      this.workdesignService.putWorkdesign(form.value).subscribe((res) => {
        this.notify.success("Diseño actualizada Correctamente",{timeout:0});
        this.onUploadPhoto(form.value.id);
        this.resetForm(form);
        if(this.foto){
          this.onUploadPhoto(0);
        }else
        this.router.navigateByUrl('/workdesigns');
      });
    }
  }
}
