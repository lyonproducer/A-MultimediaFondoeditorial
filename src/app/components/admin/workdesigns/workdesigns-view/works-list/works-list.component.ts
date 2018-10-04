import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../../../../services/admin/work/work.service';
import { Work } from 'src/app/Models/Work';
import { ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { WorkViewComponent } from '../work-view/work-view.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css']
})
export class WorksListComponent implements OnInit {

  open: boolean=false;
  works:Work[];
  idWorkdesign:number;

  constructor(
    private workService:WorkService,
    private route:ActivatedRoute,
    private snotify:SnotifyService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.idWorkdesign = this.route.snapshot.params.id;
    this.refreshWorksList(this.idWorkdesign);
  }

  openComponent(){
    this.open=!this.open;
  }

  refreshWorksList(id:number) {
    
    this.workService.getWorks(id).subscribe(
      res => {
        console.log("el response complementos", res);
        this.workService.works = res as Work[];
        //this.works = res;
      }
    );
  }

  onDelete(id:number){
    this.workService.deleteWork(id).subscribe(
      data => {
        this.snotify.success("Complemento eliminado con exito",{timeout:0});
        this.refreshWorksList(this.idWorkdesign);
      },
      error => {
        this.snotify.error("Error al aliminar",{timeout:0});
      }
    );
  }

  openWorkViewDialog(work:Work): void {
    const dialogRef = this.dialog.open(WorkViewComponent, {
      width: '50%',
      data: work
    });
  }

}
