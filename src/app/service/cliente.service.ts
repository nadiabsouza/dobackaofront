import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../cliente/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http:HttpClient) {
  
  }

 inserirClente(cliente:Cliente) : Observable<Cliente>{
  return this._http.post<Cliente>('http://localhost:8080/api/pessoa/v1', cliente);
  
  }
}
