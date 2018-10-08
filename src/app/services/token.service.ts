import { Injectable } from '@angular/core';
import { decode } from '@angular/router/src/url_tree';
import { VariablesComponent } from '../global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {

    login : this.variable.urlApi + '/login',
    signup : this.variable.urlApi + '/signup'
  };

  constructor(private variable:VariablesComponent) { }

  handle(token){
    this.set(token);
    //console.log(this.isValid());
  }

  set(token){
    localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('userFondoedit');
  }

  isValid(){
    //Verifica si el token recibido por el servicio es valido
    let token = this.get();

    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }

    return false;
  }

  payload(token){
    //funcion para recortar el token
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}


