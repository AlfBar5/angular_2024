import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { Producto } from '../../model/Producto';
import { ProductosService } from '../../service/productos.service';
import { PedidosService } from '../../service/pedidos.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})



//se recomienda que las instrucciones que queremos que se ejecuten en el constructor
//la clase del componente debe implementar la interfaz OnInit
//y usar el método ngOnInit()
//Aquí es donde se deberían poner las instrucciones que queremos que se ejecuten
//al inicio de la carga de la página html

export class CompraComponent implements OnInit {

  //hay un vínculo entre elementos gráficos del html y las variables del component
  pedido:Pedido;
  listaprod:Producto[];



  //Constructor - el servicio es un inyectable y
  //tenemos que decirle a angular que nos lo inyecte en el constructor los dos servicios
  constructor(private productosService:ProductosService, private pedidosService:PedidosService){

  }



  //Aquí es donde se deberían poner las instrucciones que queremos que se ejecuten
  //al inicio de la carga de la página html. Y no ponerlas en el constructor,
  //por si hay demoras en las cargas asíncronas
  //se ejecuta una vez que el componente está listo para su utilización
  ngOnInit(): void {

    //instanciamos el objeto Pedido en el constructor
    this.pedido=new Pedido();

    //para que se carge el select directamente al cargar la página html
    this.listaProductos();


  }



  //método listar productos en el select del formulario
  listaProductos():void{

    this.productosService
    .listaProductos()
    .subscribe(data=>this.listaprod=data);

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
