import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WorkService } from 'src/app/services/admin/work/work.service';
import { SnotifyService } from 'ng-snotify';
import { VariablesComponent } from '../../../../../global/variables/variables.component';

@Component({
  selector: 'app-work-view',
  templateUrl: './work-view.component.html',
  styleUrls: ['./work-view.component.css']
})
export class WorkViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WorkViewComponent>,
    public workService:WorkService,
    private notify:SnotifyService,
    public variable:VariablesComponent,
    @Inject(MAT_DIALOG_DATA) public work: any) { }

  ngOnInit() {
    console.log("data del dialog",this.work);
  }


}
