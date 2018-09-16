import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workdesign } from '../../../Models/Workdesign';
import { Observable } from 'rxjs';
import { Category } from '../../../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class WorkdesignService {

  baseURL: string = 'http://127.0.0.1:8000/api/workdesigns';

  selectedWorkdesign : Workdesign;
  editar: boolean = false;
  workdesigns : Workdesign[];

  constructor(private http: HttpClient) { }

  postWorkdesign(workdesign: Workdesign) {
    return this.http.post(this.baseURL, workdesign);
  }

  getDataWorkdesigns(){
    return this.http.get<Workdesign[]>('http://127.0.0.1:8000/api/workdesigns');
  }

  getWorkdesignsList(){
    return this.http.get(this.baseURL);
  }

  putWorkdesign(workdesign: Workdesign) {
    return this.http.post('http://127.0.0.1:8000/api/workdesigns'+ `/${workdesign.id}`, workdesign);
  }

  deleteWorkdesign(id: number) {
    return this.http.delete(this.baseURL + `/${id}`);
  }

  //post por categorias
  getWorkdesignsByCategoryList(id: number){
    return this.http.get('http://localhost:8000/api/workdesignCategory' + `/${id}`);
  }

  postFile(foto, id?:number){
    return this.http.post('http://127.0.0.1:8000/api/workdesignsFile' + `/${id}`, foto);
  }

}
