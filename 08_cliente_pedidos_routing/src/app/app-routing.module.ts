import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './components/compra/compra.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
{
  path:"compra",
  component:CompraComponent
},
{
  path:"pedidos",
  component:TiendaComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
