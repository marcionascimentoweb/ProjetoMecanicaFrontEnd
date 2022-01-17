import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ladoEsquerdo = 'assets/carroEsquerdo.png';
  public ladoDireito = 'assets/carroDireito.png';
  public logo = 'assets/logotipo.png';
  public estrada = 'assets/estrada.png';

  constructor() { }

  ngOnInit() {
  }

}
