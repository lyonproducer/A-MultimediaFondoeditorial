import { Component, OnInit } from '@angular/core';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';
import { Workdesign } from '../../../../Models/Workdesign';
import { SnotifyService } from 'ng-snotify';
import { CategoryService } from '../../../../services/admin/category/category.service';
import { Category } from '../../../../Models/Category';

@Component({
  selector: 'app-workdesigns-table',
  templateUrl: './workdesigns-table.component.html',
  styleUrls: ['./workdesigns-table.component.css']
})
export class WorkdesignsTableComponent implements OnInit {

  p: number = 1;

  index:number =1;

  constructor(public workdesignService:WorkdesignService,
    public categoryService:CategoryService,
    public notify: SnotifyService) { }

  ngOnInit() {
    this.refreshWorkdesignList();
    this.refreshCategoryList();
  }

  refreshWorkdesignList() {
    this.workdesignService.getWorkdesignsList().subscribe((res) => {
      this.workdesignService.workdesigns = res as Workdesign[];
    });
  }

  refreshCategoryList() {
    this.categoryService.getCategoriesList().subscribe((res) => {
      this.categoryService.categories = res as Category[];
    });
  }

  handleResponse(res){
    this.notify.success(res.data,{timeout:0});
    this.refreshWorkdesignList();
  }

  onDelete(id:number){
    this.workdesignService.deleteWorkdesign(id).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  onView(workdesign:Workdesign){
    this.workdesignService.selectedWorkdesign = workdesign;
  }

  onEdit(workdesign:Workdesign){
    this.workdesignService.selectedWorkdesign = workdesign;
    this.workdesignService.editar = true;
  }


}
