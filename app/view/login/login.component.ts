import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AutheticationService } from 'src/app/service/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logo = 'assets/logotipo.png';
  public pista = 'assets/pista.png';
  usuario: Usuario = new Usuario();

  constructor(private authService: AutheticationService) { }

  ngOnInit() {
  }

  loginUsuario() {
    this.authService.login(this.usuario);
  }

}
