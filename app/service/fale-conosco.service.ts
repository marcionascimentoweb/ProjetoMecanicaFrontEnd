import { FaleConosco } from './../model/faleConosco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = 'http://localhost:3000/api/faleconosco';

@Injectable({
  providedIn: 'root'
})
export class FaleConoscoService {

  constructor(private http: HttpClient) { 
}

public create(faleConosco : FaleConosco) {
  return this.http.post<FaleConosco>(`${URL}`, faleConosco);
  }

  public findAll() {
    return this.http.get<FaleConosco[]>(`${URL}`);
  }

}
