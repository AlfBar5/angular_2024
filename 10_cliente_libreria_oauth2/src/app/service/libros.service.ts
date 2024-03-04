import { TokenResponse } from './../model/TokenResponse';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/Libro';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//SEGURIDAD archivo de constantes
import { PASSWORD, USUARIO, CLIENT_ID, GRANT_TYPE, URL_AUTH } from '../custom_properties';



/*
--------DATOS reales cogidos del 21_microservicio_buscador_libros_oauth2

app.urlAuth=http://localhost:8080/realms/LibreriaDosRealm/protocol/openid-connect/token
app.username=adminlibreria
app.password=adminlibreria
app.client_id=validadorlibreria
app.grant_type=password
server.port=9000

*/

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

  //definimos variable token de tipo string
  token:string="";





  //AÑADIR ARCHIVO CONSTANTE para meter mejor el usuario y la contraseña
  //btn sobre APP / New /File /custom_properties.ts

  //SEGURIDAD importar import { HttpClient, HttpHeaders } from '@angular/common/http';

  //SEGURIDAD private headers:HttpHeaders
  constructor(private http:HttpClient) {

    //pedimos el token en el constructor
    this.setToken();

  }




  //-catálogo de libros
  // no tiene seguridad
  //URL: http://localhost:8500/libros
  listaLibros():Observable<Libro[]>{

        return this.http.get<Libro[]>(this.urlBase+"libros");

  }




  //-lista de temáticas
  //devuelve un array de string
  //URL: http://localhost:8500/tematicas
  //usuarios autentificados
  listaTematicas():Observable<string[]>{

      //para que salga un mensaje de alerta si no está el token
      //devolvemos el observable vacio
      if(this.token==""){
        alert("Token aún no diponible");
        return new Observable<string[]>();
      }

      //me quede sacando alert hasta que esté disponible el token
      /*
      while(this.token==""){
        alert("Token aún no diponible");
      }
      */

      //SEGURIDAD.
      //Inicializamos encabezado Authorization para mandar el token
      let heads=new HttpHeaders();
      heads=heads.set("Authorization","Bearer "+this.token);
      //mandamos el encabezado en la petición post
      return this.http.get<string[]>(this.urlBase+"tematicas", {headers:heads});



  }




  //alta de nuevos libros
  //http://localhost:8500/alta
  //--pedidos post -- alta pedido (http.post(url, objeto Pedido)
  //le tenemos que pasar el objeto Libro, no devuelve nada
  //usuarios admin
  altaLibro(libro:Libro):Observable<void>{

    //para que salga un mensaje de alerta si no está el token
    //devolvemos el observable vacio
    if(this.token==""){
      alert("Token aún no diponible");
      return new Observable<void>();

  }

    console.log(this.token);
    alert(this.token);

    //SEGURIDAD.
    //Inicializamos encabezado Authorization para mandar el token
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer "+this.token);
    //mandamos el encabezado en la petición post
    return this.http.post<void>(this.urlBase+"alta", libro, {headers:heads});

  }




  //-buscador de libro por ISBN
  //URL: http://localhost:8500/buscarlibro/1231
  //usuarios autentificados
  buscarLibro(isbn:number):Observable<Libro>{

    //para que salga un mensaje de alerta si no está el token
    //devolvemos el observable vacio
    if(this.token==""){
        alert("Token aún no diponible");
        return new Observable<Libro>();
    }


     //SEGURIDAD.
    //Inicializamos encabezado Authorization para mandar el token
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer "+this.token);
    //mandamos el encabezado en la petición get

    return this.http.get<Libro>(this.urlBase+"buscarlibro/"+isbn, {headers:heads});


    //return this.http.get<Libro>(this.urlBase+"buscarlibro/"+isbn);


  }


  //este método es el token en bruto, tenemos que convertir este json en una clase java, un bean llamado TokenResponse
  // Y ya cogemos de aquí la propiedad access_token.
  // este método va a por el token y, cuando esté, lo guarda en la variable token, es void
  setToken():void{

     //tokenresponse:TokenResponse;

     //url del keycloak, la constante está en el archivo custom_properties.ts
     let url=URL_AUTH;


     //parámetros que necesita keycloak para generar el TOKEN
     let params=new HttpParams();
     params=params.set("username", USUARIO);
     params=params.set("password", PASSWORD);
     params=params.set("client_id", CLIENT_ID);
     params=params.set("grant_type", GRANT_TYPE);

     //Cabecera, se envían los parámetros por form-encoded:
     let heads=new HttpHeaders();
     heads=heads.set('Content-Type','application/x-www-form-urlencoded');
     //nos devuelve un Observable json de tipo TokenResponse
     //nos sucribimos y le decimos que el dato del json access_token lo meta en la
     //variable token
     //this.http.post<TokenResponse>(url,{"headers":heads,"params":params})
     this.http.post<TokenResponse>(url,params,{"headers":heads})
     .subscribe(data=>this.token=data.access_token);

  }



}
