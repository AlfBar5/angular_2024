import { Component } from '@angular/core';
import { Persona } from '../model/Persona';

@Component({
  selector: 'app-ficha-component',
  templateUrl: './ficha-component.component.html',
  styleUrl: './ficha-component.component.css'
})


//clase
export class FichaComponentComponent {

  ////atributos-variables
  //nombre:string="";
  //edad:number=0;
  //departamento:string="";

  resultado:string="";

  //javabean
  persona:Persona;

  //constructor
  //le decimos que en la variable persona se cree un objeto de la clase Persona
  constructor(){
    this.persona=new Persona()
  }

  //métodos
  //función grabar que no devuelve nada (void)
  grabar():void{
    ////con variables
    //this.resultado="Te llamas "+this.nombre+", tienes "+this.edad+" años y eres del departamento:"+this.departamento;

    //con model
    this.resultado="Te llamas "+this.persona.nombre+", tienes "+this.persona.edad+" años y eres del departamento:"+this.persona.departamento;

  }


}
