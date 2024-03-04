import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibrosService } from '../../service/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})



export class AltaComponent implements OnInit{


//hay un vínculo entre elementos gráficos del html y las variables del component

libro:Libro;
listatematic:string[];



//inyectar todos los atributos en el constructor como private
constructor(private librosService:LibrosService, private router:Router){



}


//Aquí es donde se deberían poner las instrucciones que queremos que se ejecuten
//al inicio de la carga de la página html. Y no ponerlas en el constructor,
//por si hay demoras en las cargas asíncronas
//se ejecuta una vez que el componente está listo para su utilización
ngOnInit(): void {

  //instanciamos el objeto Libro en el constructor
  this.libro=new Libro();

  this.listaTematicas();


 }




listaTematicas():void{

  this.librosService
  .listaTematicas()
  .subscribe(data=>this.listatematic=data);
}



//No hay datos que recoger, subscribe sin parámetros
altaLibro():void{
  this.librosService
  .altaLibro(this.libro)
  //.subscribe(); //es void, no recupera nada
  //.subscribe(data=>this.listaProductos());
  .subscribe(data=>this.router.navigate(['/catalogo']))

  //redirigir
  //.subscribe(data=>this.listaProductos());
  //redirigir aquí no es conveniente porque el suscribe es asincrono
  //this.router.navigate(['/catalogo'])

}


}
