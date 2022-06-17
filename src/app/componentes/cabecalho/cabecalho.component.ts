import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/autenticacao/usuario/usuario';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$: Observable<IUsuario> = this.usuarioService.retornaUsuario();

  constructor(private usuarioService:UsuarioService, private router: Router) { }

  logout(): void{
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

}
