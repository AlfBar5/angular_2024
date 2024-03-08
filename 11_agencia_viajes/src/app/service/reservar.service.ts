import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/Hotel';
import { Vuelo } from '../model/Vuelo';
import { Reserva } from '../model/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {

  constructor(private http:HttpClient) { }

  //URL gateway: http://localhost:9000/shoteles/destinos

  localizaciones():Observable<string[]>{
    let url="http://localhost:9000/shoteles/destinos";
    return this.http.get<string[]>(url);
  }


  //URL gateway: http://localhost:9000/shoteles/listahoteles/Madrid

  hoteles(destino:string):Observable<Hotel[]>{
    let url="http://localhost:9000/shoteles/listahoteles";
    //let params=new HttpParams();
    //params=params.append("destino",destino);
    //return this.http.get<Hotel[]>(url,{params:params});
    return this.http.get<Hotel[]>(url+"/"+destino);

    //return this.http.get<Cliente>(url+"/"+usuario+"/"+password)
  }


 //URL gateway: http://localhost:9000/svuelos/listavuelos/Madrid/2

  vuelos(destino:string, plazasReservar:number):Observable<Vuelo[]>{
    let url="http://localhost:9000/svuelos/listavuelos";
    //let params=new HttpParams();
    //params=params.append("destino",destino);
    //params=params.append("reservas",plazasReservar);
    //return this.http.get<Vuelo[]>(url,{params:params});
    return this.http.get<Vuelo[]>(url+"/"+destino+"/"+plazasReservar);
  }


  //URL gateway: http://localhost:9000/sreservas/altareserva/2/1

  reservar(reserva:Reserva,plazasReservar:number):Observable<void>{
    let url="http://localhost:9000/sreservas/altareserva/";
    return this.http.post<void>(url+plazasReservar,reserva);
  }
}
