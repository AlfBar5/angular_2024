import { ProductosService } from './../../service/productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/Producto';
import { Pedido } from '../../model/Pedido';
import { PedidosService } from '../../service/pedidos.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})



//se recomienda que las instrucciones que queremos que se ejecuten en el constructor
//la clase del componente debe implementar la interfaz OnInit
//y usar el método ngOnInit()
//Aquí es donde se deberían poner las instrucciones que queremos que se ejecuten
//al inicio de la carga de la página html

export class TiendaComponent implements OnInit {

  //hay un vínculo entre elementos gráficos del html y las variables del component
  listapedid:Pedido[];


  //el servicio es un inyectable y
  //tenemos que decirle a angular que nos lo inyecte en el constructor el servicio
  constructor(private pedidosService:PedidosService){

  }



  //Aquí es donde se deberían poner las instrucciones que queremos que se ejecuten
  //al inicio de la carga de la página html. Y no ponerlas en el constructor,
  //por si hay demoras en las cargas asíncronas
  //se ejecuta una vez que el componente está listo para su utilización
  ngOnInit(): void {

    //para que se carge el select directamente al cargar la página html
    this.listaPedidos();


  }


  listaPedidos():void{

    this.pedidosService
    .listaPedidos()
    .subscribe(data=>this.listapedid=data);

  }






}
