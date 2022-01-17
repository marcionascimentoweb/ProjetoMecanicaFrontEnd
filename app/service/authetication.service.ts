import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Md5 } from 'md5-typescript';

const USUARIOS : Usuario[] = [
  { "email" : "marcio@gmail.com", "senha" : Md5.init("123")},
  { "email" : "admin@gmail.com", "senha" : Md5.init("123")}
];

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  //Verifica se está logado!
  authState = new BehaviorSubject(false);
  usuarios: Usuario[] = USUARIOS;

  constructor(private router: Router) { 
}

//CONFERIR SE USUARIOS ESTÃO LOGADOS
estaAutenticado() {
  return this.authState.value;
}

//CONFERE SE USUARIO EXISTE NA LISTA
loginProvider(usuario: Usuario):Usuario {
  var usu = null;
  this.usuarios.forEach(x => {
    if(usuario.email == x.email && Md5.init(usuario.senha) == x.senha) {
    usu = x;
    }
  });
  return usu;
}

//MÉTODO DE LOGAR
login(usuario : Usuario) {
  var obj = {
    usuario_email : usuario.email,
    usuario_senha : usuario.senha
  }
  let usu = this.loginProvider(usuario);
  if (usu != null){
    localStorage.setItem('USER_INFO' , JSON.stringify(Usuario));
    this.router.navigate(['clientes']);
    //this.router.navigate(['logado']);
    this.authState.next(true);
  }
}

//MÉTODO SE LOCALSTORAGE ESTA CHEIO
setLogado() {
  try {
    let USER_INFO = localStorage.getItem('USER-INFO');
    if (USER_INFO){
      return true;
    }
    return false;
    } catch (error) {
      console.log('Erro: ', error.error);
      return false;
    }
}

//MÉTODOS DE LOGOUT
logout() {
  localStorage.removeItem('USER_INFO');
  this.router.navigate(['login']);
  this.authState.next(false);
}
}
