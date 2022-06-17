import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', {
      usuario,
      senha}
      ,{observe: 'response'}).
      pipe(
        tap(
          (res) => {
            const authToken = res.headers.get('x-access-token') ?? '';
            this.usuarioService.salvaToken(authToken);
          }
        ));
      }
}
