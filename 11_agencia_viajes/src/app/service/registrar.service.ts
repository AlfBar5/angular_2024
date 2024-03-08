import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {




  constructor(private http:HttpClient) { }

  ////URL gateway: http://localhost:9000/sclientes/alta

  registrar(cliente:Cliente):Observable<void>{
    let url="http://localhost:9000/sclientes/alta";
    return this.http.post<void>(url,cliente);
  }

}
