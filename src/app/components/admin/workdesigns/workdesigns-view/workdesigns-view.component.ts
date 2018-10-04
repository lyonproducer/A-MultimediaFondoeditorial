import { Component, OnInit } from '@angular/core';
import { Workdesign } from '../../../../Models/Workdesign';
import { WorkdesignService } from '../../../../services/admin/workdesign/workdesign.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Snotify, SnotifyService } from 'ng-snotify';
import { MatDialog } from '@angular/material';
import { WorkFormComponent } from './work-form/work-form.component';

@Component({
  selector: 'app-workdesigns-view',
  templateUrl: './workdesigns-view.component.html',
  styleUrls: ['./workdesigns-view.component.css']
})
export class WorkdesignsViewComponent implements OnInit {

  workdesign: Workdesign;

  public loggedIn: boolean;

  constructor(
    private workdesignService: WorkdesignService,
    private auth: AuthService,
    private router: Router,
    private snotify: SnotifyService,
    public dialog: MatDialog,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.workdesign = this.workdesignService.selectedWorkdesign;
    this.auth.authStatus.subscribe(value => this.loggedIn = value);

    console.log("el id del diseño es: ", this.route.snapshot.params.id);

    if (this.workdesign == undefined) {
      this.router.navigateByUrl('/workdesigns');
      this.snotify.info("Seleccione un diseño de la lista", { timeout: 0 });
    }
  }

  openWorkFormDialog(): void {
    const dialogRef = this.dialog.open(WorkFormComponent, {
      width: '50%',
      data: {id: this.route.snapshot.params.id, editar:false}
    });
  }


  }
