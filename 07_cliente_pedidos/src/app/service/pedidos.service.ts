import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/Pedido';


/*
22_servidor_eureka
30_servidor_gateway
27_microservicio_productos_eureka (SERVICIO WEB)
28_microservicio_pedidos_eureka

31_cliente_front_pedidos_gateway (las dos páginas html en una sola)

------- peticiones con ruta del gateway, puerto 9000 (que es donde está corriendo y el path sproductos

*/


@Injectable({
  providedIn: 'root'
})


export class PedidosService {

  urlBase:string="http://localhost:9000/spedidos/";

  constructor(private http:HttpClient) { }



  //--pedidos get. lista de pedidos
  //http://localhost:9000/spedidos/pedidos
  listaPedidos():Observable<Pedido[]>{

    return this.http.get<Pedido[]>(this.urlBase+"pedidos")

  }



  //--pedidos post -- alta pedido (http.post(url, objeto Pedido)
  //le tenemos que pasar el objeto Pedido
  //http://localhost:9000/spedidos/alta
  //Observable<void> y post<void> porque no devuelve nada
  altaPedidos(pedido:Pedido):Observable<void>{

    return this.http.post<void>(this.urlBase+"alta", pedido);

  }





}
