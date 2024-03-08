import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../model/Reserva';

@Injectable({
  providedIn: 'root'
})
export class MisReservasService {

  constructor(private http:HttpClient) { }


  recuperar(usuario:string):Observable<Reserva[]>{
    let url="http://localhost:9000/sreservas/reservas/";
    return this.http.get<Reserva[]>(url+usuario);
  }


}
