import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/admin/category/category.service';
import { Category } from '../../../../Models/Category';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {

  category : Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = this.categoryService.selectedCategory; 
  }

}
