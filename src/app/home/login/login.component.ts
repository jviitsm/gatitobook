import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/animais');
    }, (err) => {alert('Usuário ou senha incorreta')});
  }

}
