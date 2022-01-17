import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = "http://localhost:3000/api/clientes";
  private urlID = "http://localhost:3000/api/clientes/id";

  constructor(private http: HttpClient) { }

  //Método Observable listar todos
  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //Método Observable cadastrar 
  createClientes(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);
  }

  
  getCliente(_id: string): Observable<Cliente>{
    const _url = `${this.urlID}/${_id}`;
    return this.http.get<Cliente>(_url);
  }

  //Método Observable Deletar
  deleteClientes(_id: string): Observable<Cliente>{
    const _url = `${this.urlID}/${_id}`;
    return this.http.delete<Cliente>(_url);
  }

  //Método Observable Alterar
  updateClientes(_id: string, request: Cliente): Observable<Cliente>{
    const _url = `${this.urlID}/${_id}`;
    return this.http.put<Cliente>(_url, request);
  }

}
