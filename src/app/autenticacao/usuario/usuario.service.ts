import { IUsuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
   }

  private decodificaJWT(): void{
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as IUsuario;
    return this.usuarioSubject.next(usuario)
  }

  retornaUsuario(): Observable<IUsuario>{
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string): void{
    this.tokenService.salvaToken(token);
    return this.decodificaJWT();
  }

  logout(): void{
    this.tokenService.excluiToken();
    return this.usuarioSubject.next({});
  }

  estaLogado(): boolean{
    return this.tokenService.possuiToken();
  }

}
