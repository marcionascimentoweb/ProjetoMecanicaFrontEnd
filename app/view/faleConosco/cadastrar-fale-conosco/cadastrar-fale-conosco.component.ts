import { FaleConoscoService } from './../../../service/fale-conosco.service';
import { Component, OnInit } from '@angular/core';
import { FaleConosco } from 'src/app/model/faleConosco';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-fale-conosco',
  templateUrl: './cadastrar-fale-conosco.component.html',
  styleUrls: ['./cadastrar-fale-conosco.component.css']
})
export class CadastrarFaleConoscoComponent implements OnInit {

  faleConosco : FaleConosco;
  faleConoscoLista : FaleConosco[] = [];
  mensagem = '';
  fg : FormGroup;

  constructor(private service: FaleConoscoService, 
             private fb : FormBuilder,
             private _router: Router ) {
             this.faleConosco = new FaleConosco();  
              }

  ngOnInit() {
    this.fg = this.fb.group({
      nome : ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(70),
        Validators.pattern(/^[a-z A-Z]*$/)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      tel: ['', Validators.compose([
        Validators.required 
      ])],
      msg: ['', Validators.compose([
        Validators.required
      ])]

    })

  }

  gravar(){
    this.service.create(this.faleConosco).subscribe(res=>{
      alert('Preenchido com Sucesso');
      console.log("Preenchido com Sucesso");

        this.voltar();
        //this.faleConosco = new FaleConosco(); //Limpar o formulário
       });
  }

  //Método para voltar a página inicial após cadastrar no fale conosco.
  voltar(){
   this._router.navigate(['']); 
  }

  private getControl (name: string){
    return this.fg.controls[name];
  }

  get nome(){
    return this.getControl('nome');
  }

  get email() {
    return this.getControl('email');
  }

  get tel() {
    return this.getControl('tel');
  }

  get msg() {
    return this.getControl('msg');
  }

}
