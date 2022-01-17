import { Component, OnInit } from '@angular/core';
import { AutheticationService } from 'src/app/service/authetication.service';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

  constructor(private authService: AutheticationService) { }

  ngOnInit() {
  }

  logoutUsuario() {
    this.authService.logout();
  }

}
