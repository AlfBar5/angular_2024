import { Component } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { LoginService } from '../../service/login.service';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  usuario:string;
  password:string;
  cliente:Cliente;


  constructor(private loginService:LoginService,
    private menuComponent:MenuComponent,
    private router:Router){

  }
  login():void{
    this.loginService.login(this.usuario,this.password).subscribe(data=>{
      this.cliente=data;
      if(this.cliente){
        this.menuComponent.cliente=data;
        this.menuComponent.enabledActions=true;
        this.menuComponent.enabledEnter=false;
        this.router.navigate(["/reservar"]);
      }else{
        alert("usuario no autenticado");
      }
    });
  }


}
