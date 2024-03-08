import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ReservarComponent } from './components/reservar/reservar.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    MenuComponent,
    ReservarComponent,
    MisReservasComponent
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
