import { Component, OnInit } from '@angular/core';
import { WorkdesignService } from '../../../services/admin/workdesign/workdesign.service';
import { Workdesign } from '../../../Models/Workdesign';
import { CategoryService } from '../../../services/admin/category/category.service';
import { Category } from '../../../Models/Category';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { AuthService } from '../../../services/auth.service';
import { VariablesComponent } from 'src/app/global/variables/variables.component';

@Component({
  selector: 'app-workdesign-list',
  templateUrl: './workdesign-list.component.html',
  styleUrls: ['./workdesign-list.component.css']
})
export class WorkdesignListComponent implements OnInit {

  p: number = 1;
  categories : Category[]

  public loggedIn : boolean;

  constructor(public workdesignService: WorkdesignService,
              public categoryService:CategoryService,
              private router:Router,
              public token:Token,
              public auth: AuthService,
              public variable:VariablesComponent
            ) { }
              

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
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
