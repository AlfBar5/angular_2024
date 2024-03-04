import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { TiendaComponent } from './components/tienda/tienda.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompraComponent } from './components/compra/compra.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    TiendaComponent,
    CompraComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
