import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/Libro';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//SEGURIDAD archivo de constantes
import { PASSWORD, USUARIO } from '../custom_properties';





@Injectable({
  providedIn: 'root'
})


//Este servicio está segurizado. El 16_ tiene los usarios autentificados en bd:
//jdbc:mysql://localhost:3306/springsecurity
//el buscar libro es para usuarios autentificados
//el alta es para usuarios con rol admin
//hay que pasar el admin admin en base64 y mandarla en la cabecera de la petición

export class LibrosService {



  //declarar variable con dirección de llamada:
  urlBase:string="http://localhost:8500/";


  //SEGURIDAD usuario y password que hay que mandar al servicio 16_
  //en fichero SecurityConfig
  //usuario:string="admin";
  //password:string="admin";

  //AÑADIR ARCHIVO CONSTANTE para meter mejor el usuario y la contraseña
  //btn sobre APP / New /File /custom_properties.ts

  //SEGURIDAD importar Http

  //SEGURIDAD private headers:HttpHeaders
  constructor(private http:HttpClient) {

  }




  //-catálogo de libros
  //URL: http://localhost:8500/libros
  listaLibros():Observable<Libro[]>{

        return this.http.get<Libro[]>(this.urlBase+"libros");

  }




  //-lista de temáticas
  //devuelve un array de string
  //URL: http://localhost:8500/tematicas
  //No segurizado
  listaTematicas():Observable<string[]>{

    return this.http.get<string[]>(this.urlBase+"tematicas");

  }




  //alta de nuevos libros
  //http://localhost:8500/alta
  //--pedidos post -- alta pedido (http.post(url, objeto Pedido)
  //le tenemos que pasar el objeto Libro, no devuelve nada
  //usuarios admin
  altaLibro(libro:Libro):Observable<void>{

    //SEGURIDAD. Codificamos usuario y contraseña a Base64
    let cadBase64=btoa(USUARIO+":"+PASSWORD);
    //Inicializamos encabezado Authorization para mandar el login codificado
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Basic "+cadBase64);
    //mandamos el encabezado en la petición post
    return this.http.post<void>(this.urlBase+"alta", libro, {headers:heads});

  }




  //-buscador de libro por ISBN
  //URL: http://localhost:8500/buscarlibro/1231
  //usuarios autentificados
  buscarLibro(isbn:number):Observable<Libro>{

    //SEGURIDAD
    let cadBase64=btoa(USUARIO+":"+PASSWORD);
    //añadir encabezado Authorization
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Basic "+cadBase64);

    return this.http.get<Libro>(this.urlBase+"buscarlibro/"+isbn, {headers:heads});


    //return this.http.get<Libro>(this.urlBase+"buscarlibro/"+isbn);


  }






}
