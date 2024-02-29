import { BuscadorService } from './../../service/buscador.service';
import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})



export class BuscadorComponent {
  tematica:string;
  resultados:Resultado[];


  //el servicio es un inyectable y
  //tenemos que decirle a angular que nos lo inyecte en el constructor
  constructor(private buscadorService:BuscadorService){

  }


  buscar():void{


    //llamamos al método del buscador service
    //es us observable, nos suscribimos a él mediante subscribe
    //mediante una expresión Lambda le decimos lo que tiene que hacer cuando esté disponible el resultado
    this.buscadorService
    .buscarResultados(this.tematica)    //Observable<Resultado[]>
    .subscribe(data=>this.resultados=data); //llamada asíncrona, esto se ejecuta cuando el resultado esté disponible

    //la petición es asíncrona, si el método tiene algo más que hacer, lo hace
    //la petición asincrona se ejecuta en un hilo distinto


  }

}
