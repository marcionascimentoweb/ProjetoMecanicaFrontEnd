import { ClienteService } from './../../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  public headerForm = './assets/form/header_Form.png';
  public efeitoForm = './assets/form/header_Form_Efeito.png';
  cliente : Cliente;
  clientes : Cliente[] = [];

  constructor(
    private clienteService : ClienteService, 
    private _route: Router ) { 
      this.cliente = new Cliente();
    }

    

  ngOnInit() {
  }

  gravar(){
    this.clienteService.createClientes(this.cliente).subscribe(res =>{
    this.cliente = new Cliente();  
    })
  }

  listarAll() {
    this._route.navigate(['/listarClientes']);
  }


}
