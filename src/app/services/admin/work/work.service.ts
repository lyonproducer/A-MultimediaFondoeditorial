import { Injectable } from '@angular/core';
import { Work } from '../../../Models/Work';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from '../../../global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  selectedWork : Work;

  works:Work[];

  constructor(
    private http: HttpClient,
    private variable:VariablesComponent
  ) { }

  postWork(work){
    return this.http.post(this.variable.urlApi + '/work', work);
  }

  getWorks(id:number){
    return this.http.get<Work[]>(this.variable.urlApi + '/works/' + id);
  }

  deleteWork(id:number){
    return this.http.delete('http://127.0.0.1:8000/api/work/' + id);
  }
}
