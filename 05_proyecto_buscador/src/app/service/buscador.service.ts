import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuscadorService {


  //si en el constructor ponemos private, angular entiende que es un atributo
  //con lo cual ya sabe que lo tiene que inyectar, y podemos acceder desde los métodos
  constructor(private http:HttpClient) { }


  //defenimos el método para conectarme al servicio externo
  //y que nos devuelva unos resultados
  //mandamos desde el controller una temativa y recibimos un "Observable"
  buscarResultados(tematica:string):Observable<Resultado[]>{

    //declarar variable con dirección de llamada:
    let url:string="http://localhost:7000/buscador/buscar";

    //hacer llamada a recursos externo, peticiones HttpClient. get, push, post
    //get(url: string, options?: RequestOptionsArgs): Observable<Response>
    //llamada asincrona
    return this.http.get<Resultado[]>(url+"?tematica="+tematica);


  }



}
