import { Injectable } from '@angular/core';
import { Category } from '../../../Models/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  selectedCategory : Category;
  editar: boolean = false;
  categories : Category[];
  categoriesName : Category[];

  constructor(private http: HttpClient) { }

  postCategory(category: Category) {
    return this.http.post('http://127.0.0.1:8000/api/categories', category);
  }

  getDataCategories(){
    return this.http.get<Category[]>('http://127.0.0.1:8000/api/categories');
  }

  getCategoriesList(){
    return this.http.get('http://127.0.0.1:8000/api/categories');
  }

  putCategory(category: Category) {
    return this.http.post('http://127.0.0.1:8000/api/categories'+ `/${category.id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete('http://127.0.0.1:8000/api/categories' + `/${id}`);
  }
  

    //Categorias
    getCategoriesName(){
      return this.http.get('http://127.0.0.1:8000/api/categoriesName');
    }
}
