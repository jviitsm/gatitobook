import { UsuarioExisteService } from './usuario-existe.service';
import { INovoUsuario } from './novo-usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { minusculoValidator } from './validators/minusculo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
     private formBuilder: FormBuilder,
     private novoUsuarioService: NovoUsuarioService,
     private usuarioExistenteService: UsuarioExisteService
     ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['',
      [
        Validators.required,
        Validators.email
      ]],
      fullName: ['',
      [
        Validators.required,
         Validators.minLength(4)
      ]],
      userName: ['', [minusculoValidator],[this.usuarioExistenteService.usuarioJaExiste()]],
      password: ['']
    });
  }

  cadastrar(): void{
    const user = this.novoUsuarioForm.getRawValue() as INovoUsuario
    console.log(user);
  }

}
