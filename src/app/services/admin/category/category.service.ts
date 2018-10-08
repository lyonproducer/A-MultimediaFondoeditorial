import { Injectable } from '@angular/core';
import { Category } from '../../../Models/Category';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from '../../../global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  selectedCategory : Category;
  editar: boolean = false;
  categories : Category[];
  categoriesName : Category[];

  constructor(
    private http: HttpClient,
    private variable:VariablesComponent) { }

  postCategory(category: Category) {
    return this.http.post(this.variable.urlApi + '/categories', category);
  }

  getDataCategories(){
    return this.http.get<Category[]>(this.variable.urlApi + '/categories');
  }

  getCategoriesList(){
    return this.http.get(this.variable.urlApi + '/categories');
  }

  putCategory(category: Category) {
    return this.http.post(this.variable.urlApi + '/categories'+ `/${category.id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.variable.urlApi + '/categories' + `/${id}`);
  }
  

    //Categorias
    getCategoriesName(){
      return this.http.get(this.variable.urlApi + '/categoriesName');
    }
}
