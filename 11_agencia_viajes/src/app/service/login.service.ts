import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

////URL gateway: http://localhost:9000/sclientes/autentication/client1/client1

  login(usuario:string,password:string):Observable<Cliente>{
    let url="http://localhost:9000/sclientes/autentication";
    //let params=new HttpParams();
    //params=params.append("usuario",usuario);
    //params=params.append("password",password);
    //return this.http.get<Cliente>(url,{params:params})
    return this.http.get<Cliente>(url+"/"+usuario+"/"+password)
  }



}
