import { Pedido } from './../../model/Pedido';
import { Component } from '@angular/core';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})


export class PedidosComponent {

  //lista JSON de objetos Pedido vacia
  //si no inicializamos el array da error de inicizalizado
  listapedidos:Pedido[]=[];

  //javabean
  pedido:Pedido;

  //texto pedido
  txtresultado:string;

  //constructor
  //le decimos que en la variable pedido se cree un objeto de la clase Pedido
  constructor(){
    this.pedido=new Pedido()
  }



  //tabla de pedidos no visible
  tablaVisible:boolean=false;

 //Método guardar pedidos
 guardar():void{

    this.listapedidos.push(this.pedido);
    this.pedido=new Pedido();

    ////Para ver pedidos en la consola
    //console.log(this.listapedidos);
    ////alert
    //alert("alerta nuclear");

 }



 //Método ver pedidos
 verpedidos():void{

  //hace lo contrario del estado actual
  this.tablaVisible=!this.tablaVisible;
  //this.tablaVisible=true;

 }



}
