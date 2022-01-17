import { Component, OnInit } from '@angular/core';
import { FaleConosco } from 'src/app/model/faleConosco';
import { Router } from '@angular/router';
import { FaleConoscoService } from 'src/app/service/fale-conosco.service';

@Component({
  selector: 'app-listar-fale-conosco',
  templateUrl: './listar-fale-conosco.component.html',
  styleUrls: ['./listar-fale-conosco.component.css']
})
export class ListarFaleConoscoComponent implements OnInit {

  faleConosco : FaleConosco;
  faleConoscoLista : FaleConosco[] = [];

  constructor(private service : FaleConoscoService, private _router: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.service.findAll().subscribe(res => {
      this.faleConoscoLista = res;
    });
   }

   voltar(){
    this._router.navigate(['/clientes']);
  }

}
