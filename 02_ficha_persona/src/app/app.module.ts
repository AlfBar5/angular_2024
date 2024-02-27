import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FichaComponentComponent } from './ficha-component/ficha-component.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    FichaComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FichaComponentComponent]
})
export class AppModule { }
