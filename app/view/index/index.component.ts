import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public servicos = 'assets/icones/servicos.png';
  public nossasLojas = 'assets/icones/nossasLojas.png';
  public faleConosco = 'assets/icones/faleConosco.png';

  constructor() { }

  ngOnInit() {
  }

}
