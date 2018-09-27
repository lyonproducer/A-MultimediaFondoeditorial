import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/admin/category/category.service';
import { Category } from '../../../../Models/Category';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService:CategoryService, private notify: SnotifyService) { }

  ngOnInit() {
    this.refreshCategoryList();
  }

  refreshCategoryList() {
    this.categoryService.getCategoriesList().subscribe((res) => {
      this.categoryService.categories = res as Category[];
    });
  }

  onDelete(id: number) {
    this.categoryService.deleteCategory(id).subscribe((res) => {
      this.refreshCategoryList();
      this.notify.success('Eliminado correctamente', {timeout:0});
    });
  }

  onCreate(){
    this.categoryService.editar=false;
  }

  onEdit(category: Category) {
    this.categoryService.selectedCategory = category;
    this.categoryService.editar=true;
  }

  onView(category: Category) {
    this.categoryService.selectedCategory = category;
  }
}
