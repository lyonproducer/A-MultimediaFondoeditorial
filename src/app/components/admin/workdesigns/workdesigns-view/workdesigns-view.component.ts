import { Component, OnInit } from '@angular/core';
import { Workdesign } from '../../../../Models/Workdesign';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';

@Component({
  selector: 'app-workdesigns-view',
  templateUrl: './workdesigns-view.component.html',
  styleUrls: ['./workdesigns-view.component.css']
})
export class WorkdesignsViewComponent implements OnInit {

  workdesign : Workdesign;

  open: boolean=false;
  constructor(private workdesignService:WorkdesignService) { }

  ngOnInit() {
    this.workdesign = this.workdesignService.selectedWorkdesign;
  }

  openComponent(){
    this.open=!this.open;
  }

}
