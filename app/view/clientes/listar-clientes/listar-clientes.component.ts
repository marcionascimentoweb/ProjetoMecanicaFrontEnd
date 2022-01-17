import { Cliente } from './../../../model/cliente';
import { ClienteService } from './../../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  cliente : Cliente;
  clientes : Cliente[] = [];

  constructor(private clienteService: ClienteService, private _router: Router) { 
    this.cliente = new Cliente();
  }

  ngOnInit() {
  this.listarAll();
  }

  public listarAll() {
    this.clienteService.getClientes().subscribe(res => {
      this.clientes = res;
    });
  }

  voltar(){
    this._router.navigate(['/clientes']);
  }



}
