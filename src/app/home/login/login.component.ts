import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: string = '';
  private senha: string = '';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe((res) => {
      console.log(res)
    }, (err) => {alert('Usuário ou senha incorreta')});
  }

}
