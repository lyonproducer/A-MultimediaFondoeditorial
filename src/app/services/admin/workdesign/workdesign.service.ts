import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getWorkdesignsBySearch(data){
    console.log("se recibe en servicio data", data);

    let params = new HttpParams();
    if(data.dependency){
      params = params.append("dependency",data.dependency);
    }
    if(data.title){
      params = params.append("title",data.title);
    }
    if(data.publishedDate){
      params = params.append("publishedDate",data.publishedDate);
    }
    if(data.status){
      params = params.append("status",data.status);
    }
    if(data.uploadBy){
      params = params.append("uploadBy",data.uploadBy);
    }
    console.log("se envia params", params);
    return this.http.get<Workdesign[]>(this.variable.urlApi + '/workdesignSearch',{params: params});
  }

  postFile(foto, id:number){
    //console.log("mando servicio foto id", id);
    return this.http.post(this.variable.urlApi + '/workdesignsFile' + `/${id}`, foto);
  }

}
