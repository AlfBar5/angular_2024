import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { Libro } from '../../model/Libro';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})


export class CatalogoComponent implements OnInit {

  listalibr:Libro[];


  constructor(private librosService:LibrosService){

  }



  ngOnInit(): void {

        //para que se carge el select directamente al cargar la página html
    this.catalogoLibros();


   }


   catalogoLibros():void{

    this.librosService
    .listaLibros()
    .subscribe(data=>this.listalibr=data);

   }

}
