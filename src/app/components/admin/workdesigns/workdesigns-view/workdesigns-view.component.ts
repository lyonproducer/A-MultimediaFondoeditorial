import { Component, OnInit } from '@angular/core';
import { Workdesign } from '../../../../Models/Workdesign';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Snotify, SnotifyService } from 'ng-snotify';
import { MatDialog } from '@angular/material';
import { WorkFormComponent } from './work-form/work-form.component';
import { VariablesComponent } from '../../../../global/variables/variables.component';

@Component({
  selector: 'app-workdesigns-view',
  templateUrl: './workdesigns-view.component.html',
  styleUrls: ['./workdesigns-view.component.css']
})
export class WorkdesignsViewComponent implements OnInit {

  workdesign: any;

  public loggedIn: boolean;

  constructor(
    private workdesignService: WorkdesignService,
    private auth: AuthService,
    private router: Router,
    private snotify: SnotifyService,
    public dialog: MatDialog,
    private route:ActivatedRoute,
    public variable:VariablesComponent
  ) { }

  ngOnInit() {
    this.workdesign = this.workdesignService.selectedWorkdesign;
    console.log(this.workdesignService.selectedWorkdesign.file);
    this.auth.authStatus.subscribe(value => this.loggedIn = value);

    console.log("el id del diseño es: ", this.route.snapshot.params.id);

    if (this.workdesign == undefined) {
      this.router.navigateByUrl('/workdesigns');
      this.snotify.info("Seleccione un diseño de la lista");
    }
  }

  openWorkFormDialog(): void {
    const dialogRef = this.dialog.open(WorkFormComponent, {
      width: '50%',
      data: {id: this.route.snapshot.params.id, editar:false}
    });
  }

}
