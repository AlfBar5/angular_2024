import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AltaComponent } from './components/alta/alta.component';

const routes: Routes = [
{
  path:"catalogo",
  component:CatalogoComponent
},
{
  path:"buscador",
  component:BuscadorComponent
},
{
  path:"alta",
  component:AltaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
