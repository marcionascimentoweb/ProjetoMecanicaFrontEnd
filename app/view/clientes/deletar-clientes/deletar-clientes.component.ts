import { ClienteService } from './../../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-deletar-clientes',
  templateUrl: './deletar-clientes.component.html',
  styleUrls: ['./deletar-clientes.component.css']
})
export class DeletarClientesComponent implements OnInit {

  id: string;
  cliente : Cliente;

  constructor(
    private clienteService : ClienteService,
    private route: ActivatedRoute,
    private _route: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    this.clienteService.getCliente(this.id).subscribe(res => {
      this.cliente = res;
    })
  }

  deletar() {
    this.clienteService.deleteClientes(this.id).subscribe(res =>{
      alert('Removido com sucesso!');
      this._route.navigate(['/listarClientes']);
    })
  }

  cancelar() {
    this._route.navigate(['/listarClientes']);
  }

}
