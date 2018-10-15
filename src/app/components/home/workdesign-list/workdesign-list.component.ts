import { Component, OnInit } from '@angular/core';
import { WorkdesignService } from '../../../services/admin/workdesign/workdesign.service';
import { Workdesign } from '../../../Models/Workdesign';
import { CategoryService } from '../../../services/admin/category/category.service';
import { Category } from '../../../Models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workdesign-list',
  templateUrl: './workdesign-list.component.html',
  styleUrls: ['./workdesign-list.component.css']
})
export class WorkdesignListComponent implements OnInit {

  categories : Category[]
  constructor(private workdesignService: WorkdesignService,
              private categoryService:CategoryService,
              private router:Router) { }

  ngOnInit() {
    this.refreshWorkdesignList();
    
  }

  refreshWorkdesignList() {
    this.workdesignService.getWorkdesignsList().subscribe((res) => {
      this.workdesignService.workdesigns = res as Workdesign[];
    });
  }

  refreshWorkdesignCategoryList(id:number, name:string) {
    this.workdesignService.getWorkdesignsByCategoryList(id).subscribe((res) => {
      this.workdesignService.workdesigns = res as Workdesign[];
      console.log(this.workdesignService.workdesigns);
    });
  }

  onView(workdesign:Workdesign){
    this.workdesignService.selectedWorkdesign = workdesign;
  }

}
