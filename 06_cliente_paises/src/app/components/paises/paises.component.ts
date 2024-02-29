import { Pais } from './../../model/Pais';
import { PaisesService } from './../../service/paises.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})


export class PaisesComponent {

  //hay un vínculo entre elementos gráficos del html y las variables del component
  continenteSel:string;
  paises:Pais[];
  listacontinentes:string[];

  //el servicio es un inyectable y
  //tenemos que decirle a angular que nos lo inyecte en el constructor
  constructor(private paisesService:PaisesService){

    //para que se carge el select directamente al cargar la página html
    this.listaContinent();

  }


  //los métodos del component.ts son siempre void, están asociados a eventos



  //lista continentes. Cuando estén los datos los guarda en la variable listacontinentes
  listaContinent():void{

    this.paisesService
    .listaContinentes()
    .subscribe(data=>this.listacontinentes=data);


  }



  //paises por continente. Le paso el continente seleccionado continenteSel
  paisesPorContinente():void{

    //llamamos al método del buscador service
    //es us observable, nos suscribimos a él mediante subscribe
    //mediante una expresión Lambda le decimos lo que tiene que hacer cuando esté disponible el resultado
    this.paisesService
    .listaPaisesPorContinent(this.continenteSel)    //Observable<Resultado[]>
    .subscribe(data=>this.paises=data); //llamada asíncrona, esto se ejecuta cuando el resultado esté disponible

    //la petición es asíncrona, si el método tiene algo más que hacer, lo hace
    //la petición asincrona se ejecuta en un hilo distinto

  }



}
