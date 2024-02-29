import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})


export class PaisesService {

  //listacontinentes:[]=[];

  //si en el constructor ponemos private, angular entiende que es un atributo
  //con lo cual ya sabe que lo tiene que inyectar, y podemos acceder desde los métodos
  constructor(private http:HttpClient) { }



  //defenimos el método para conectarme al servicio externo
  //y que nos devuelva unos resultados
  //mandamos desde el controller una temativa y recibimos un "Observable"
  //devuelve un array de string
  listaContinentes():Observable<string[]>{

    //declarar variable con dirección de llamada:
    let url:string="http://localhost:9000/";

    //hacer llamada a recursos externo, peticiones HttpClient. get, push, post
    //get(url: string, options?: RequestOptionsArgs): Observable<Response>
    //llamada asincrona
    return this.http.get<string[]>(url+"continentes");

  }

  //le pasamos como parámetro el continente
  listaPaisesPorContinent(continente:string):Observable<Pais[]>{

    //declarar variable con dirección de llamada:
    let url:string="http://localhost:9000/paises/";

    //hacer llamada a recursos externo, peticiones HttpClient. get, push, post
    //get(url: string, options?: RequestOptionsArgs): Observable<Response>
    //llamada asincrona
    return this.http.get<Pais[]>(url+continente);

  }


}
