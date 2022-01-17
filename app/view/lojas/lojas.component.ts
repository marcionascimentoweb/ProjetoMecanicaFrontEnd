import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {

  public matrizImg = 'assets/fotoMatriz.png';
  public filialImg = 'assets/fotoFilial.png';
  public mapaMatriz = 'assets/MapaMatriz.png';
  public mapaFilial = 'assets/MapaFilial.png';

  constructor() { }

  ngOnInit() {
  }

}
