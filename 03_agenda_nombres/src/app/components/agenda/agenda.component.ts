import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})


export class AgendaComponent {

  //lista JSON de cadenas vacia
  nombres:string[]=[];

  //variable que guarda el nombre introducido en el campo de texto
  nombre:string="";

  //variable que guarda el nombre seleccionado
  nombreSel:string="";

  //método guardar. Coje el valor de la variable nombre y la mete en la lista
  guardar():void{

    this.nombres.push(this.nombre);

  }


  //método eliminar
  eliminar():void{

    //recorremos el array de nombres y, si encontramos un nombre igual al seleccionado, lo borramos
    for(let i=0;i<this.nombres.length;i++){
      if(this.nombres[i]==this.nombreSel){
        this.nombres.splice(i,1);
      }
    }


  }

}
