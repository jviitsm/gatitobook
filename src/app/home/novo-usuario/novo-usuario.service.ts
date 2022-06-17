import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraUsuario(novoUsuario: INovoUsuario): Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/signup', novoUsuario);
  }
}
