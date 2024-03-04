import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})



export class BuscadorComponent  implements OnInit {

  resultadolibro:Libro;
  isbn:number;

  constructor(private librosService:LibrosService){

  }


  //Aquí es donde se deberían poner las instrucciones que queremos que se ejecuten
  //al inicio de la carga de la página html. Y no ponerlas en el constructor,
  //por si hay demoras en las cargas asíncronas
  //se ejecuta una vez que el componente está listo para su utilización
  //hay que inicializar el objeto Libro para que no dé errores de javascript
  ngOnInit(): void {

    //instanciamos el objeto Libro en el constructor
    this.resultadolibro=new Libro();

  }


  //devuelve un libro
  buscaLibro():void{

    this.librosService
    .buscarLibro(this.isbn)
    .subscribe(data=>this.resultadolibro=data);

 }

}
