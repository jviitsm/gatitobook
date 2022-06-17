import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INovoUsuario } from './novo-usuario';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraUsuario(novoUsuario: INovoUsuario): Observable<any>{
    return this.httpClient.post(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any>{
    return this.httpClient.get(`${API}/user/exists/${nomeUsuario}`);
  };


}
