import { ProductosService } from './../../service/productos.service';
import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { Pedido } from '../../model/Pedido';
import { PedidosService } from '../../service/pedidos.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})




export class TiendaComponent {

  //hay un vínculo entre elementos gráficos del html y las variables del component
  pedido:Pedido;
  listaprod:Producto[];
  listapedid:Pedido[];




  //pedido:Pedido[0,this.codigoProducto,this.unidades,0,""];

  //pedido =new Pedido(0,this.codigoProducto,this.unidades,0,"");

  //el servicio es un inyectable y
  //tenemos que decirle a angular que nos lo inyecte en el constructor los dos servicios
  constructor(private productosService:ProductosService, private pedidosService:PedidosService){

    //instanciamos el objeto Pedido en el constructor
    this.pedido=new Pedido();

    //para que se carge el select directamente al cargar la página html
    this.listaProductos();



  }

  listaProductos():void{

    this.productosService
    .listaProductos()
    .subscribe(data=>this.listaprod=data);


  }

  listaPedidos():void{

    this.pedidosService
    .listaPedidos()
    .subscribe(data=>this.listapedid=data);

  }

  //No hay datos que recoger, subscribe sin parámetros
  altaPedido():void{

    this.pedidosService
    .altaPedidos(this.pedido)
    //.subscribe(); //es void, no recupera nada
    .subscribe(data=>this.listaProductos());

    //carga la lista de productos de nuevo en el select, pero cuando se haya guardado el pedido

  }




}
