import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  public mecanicaImg = 'assets/servico/mecanica.jpg';
  public oleoImg = 'assets/servico/oleo.jpg';
  public pinturaImg = 'assets/servico/pintura.jpg';
  public eletricaImg = 'assets/servico/eletrica.jpg';
  public borrachariaImg = 'assets/servico/borracharia.jpg';
  public revisaoImg = 'assets/servico/revisao.jpg';
  public freiosImg = 'assets/servico/freios.jpg';
  public ArCondicionadoImg = 'assets/servico/ArCondicionado.jpg';
  public injecaoEletronicaImg = 'assets/servico/injecaoEletronica.jpg';
  

  constructor() { }

  ngOnInit() {
  }

}
