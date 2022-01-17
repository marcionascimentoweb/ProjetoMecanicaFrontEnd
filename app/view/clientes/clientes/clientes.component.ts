import { Component, OnInit } from '@angular/core';
import { AutheticationService } from 'src/app/service/authetication.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public boneco = './assets/boneco.png';
  public fundoCinza ='./assets/fundo_cinza.png';
  public fundoLaranja = './assets/fundo_laranja.png';

  constructor(private authService: AutheticationService) { }

  ngOnInit() {
  }

  logoutUsuario() {
    this.authService.logout();
  }


}
