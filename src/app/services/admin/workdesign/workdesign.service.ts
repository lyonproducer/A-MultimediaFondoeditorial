import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workdesign } from '../../../Models/Workdesign';
import { Observable } from 'rxjs';
import { Category } from '../../../Models/Category';
import { VariablesComponent } from '../../../global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class WorkdesignService {

  baseURL: string = 'http://127.0.0.1:8000/api/workdesigns';

  selectedWorkdesign : Workdesign;
  editar: boolean = false;
  workdesigns : Workdesign[];

  constructor(
    private http: HttpClient,
    private variable:VariablesComponent) { }

  postWorkdesign(workdesign: Workdesign) {
    return this.http.post(this.baseURL, workdesign);
  }

  getDataWorkdesigns(){
    return this.http.get<Workdesign[]>(this.variable.urlApi + '/workdesigns');
  }

  getWorkdesignsList(){
    return this.http.get(this.baseURL);
  }

  putWorkdesign(workdesign: Workdesign) {
    return this.http.post(this.variable.urlApi + '/workdesigns'+ `/${workdesign.id}`, workdesign);
  }

  deleteWorkdesign(id: number) {
    return this.http.delete(this.variable.urlApi + '/workdesigns' + `/${id}`);
  }

  //Busqueda de posts indivudual

  //post por categorias
  getWorkdesignsByCategoryList(categoryID: number){
    return this.http.get(this.variable.urlApi + '/workdesignCategory' + `/${categoryID}`);
  }

  getWorkdesignsByUserList(userID: number){
    return this.http.get(this.variable.urlApi + '/workdesignUsers' + `/${userID}`);
  }

  getWorkdesignsByTitleList(title: string){
    return this.http.get<Workdesign[]>(this.variable.urlApi + '/workdesignTitle' + `/${title}`);
  }

  getWorkdesignsByDependencyList(dependency: string){
    return this.http.get<Workdesign[]>(this.variable.urlApi + '/workdesignDependency' + `/${dependency}`);
  }

  getWorkdesignsByStatusList(status: string){
    return this.http.get<Workdesign[]>(this.variable.urlApi + '/workdesignStatus' + `/${status}`);
  }

  postFile(foto, id:number){
    //console.log("mando servicio foto id", id);
    return this.http.post(this.variable.urlApi + '/workdesignsFile' + `/${id}`, foto);
  }

}
