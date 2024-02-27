import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AgendaComponent } from './components/agenda/agenda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgendaComponent
  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AgendaComponent]
})
export class AppModule { }
