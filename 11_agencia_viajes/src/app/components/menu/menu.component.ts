import { Component } from '@angular/core';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  cliente:Cliente;
  enabledActions:boolean=false;
  enabledEnter:boolean=true;

}


