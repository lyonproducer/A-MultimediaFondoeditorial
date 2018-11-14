import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/admin/category/category.service';
import { NgForm } from '@angular/forms';
import { Category } from '../../../../Models/Category';
import { SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  category: Category = {
    id:null,
    name: null,
    body:null
  };

  constructor(public categoryService: CategoryService,
    private notify: SnotifyService,
    private router: Router) { }

  ngOnInit() {

    if(this.categoryService.editar){
      this.category = this.categoryService.selectedCategory;
      console.log('tiene datos toca update',this.category);  
    }else {
      console.log('datos nuevos toca crear');
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.categoryService.selectedCategory = {
      body: "",
      name: ""
    }
  }


  onSubmit(form: NgForm) {
    
    if (form.value.id == null) {
      this.categoryService.postCategory(form.value).subscribe((res) => {
        this.resetForm(form);
        this.router.navigateByUrl('/categorias');
        console.log('añadido correctamente');
        this.notify.success("Categoria añadida correctamente",{timeout:0});
      });
    }
    else {
      this.categoryService.putCategory(form.value).subscribe((res) => {
        this.router.navigateByUrl('/categorias');
        this.resetForm(form);
        this.notify.success("Categoria actualizada Correctamente",{timeout:0});
      });
    } 
  }
}
