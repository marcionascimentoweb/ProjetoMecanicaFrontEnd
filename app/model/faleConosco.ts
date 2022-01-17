export class FaleConosco{
  nome : string;
  email: string;
  tel : string;
  msg : string;

  constructor(nome?:string, email?:string, tel?:string, msg?:string){
    this.nome = nome;
    this.email = email;
    this.tel = tel;
    this.msg = msg;
  }
}