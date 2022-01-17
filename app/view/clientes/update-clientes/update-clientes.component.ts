import { ClienteService } from './../../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-update-clientes',
  templateUrl: './update-clientes.component.html',
  styleUrls: ['./update-clientes.component.css']
})
export class UpdateClientesComponent implements OnInit {

id: string;
request: Cliente;

public headerForm = './assets/form/header_Form.png';
public efeitoForm = './assets/form/header_Form_Efeito.png';


  constructor( private clienteService: ClienteService, 
               private route: ActivatedRoute,  
               private _route: Router ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    this.clienteService.getCliente(this.id).subscribe(res => {
      this.request = {
        _id: `${res._id}`,
        idCliente: `${res.idCliente}`,
        nome: `${res.nome}`,
        dataNascimento: `${res.dataNascimento}`,
        sexo: `${res.sexo}`
      }
    })
  }

  update(){
    this.clienteService.updateClientes(this.id, this.request).subscribe(
      res => {
        alert('Cliente Atualizado');
      })
  }

  listar() {
    this._route.navigate(['/listarClientes']);
  }


}
