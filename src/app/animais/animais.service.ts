import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais, IAnimal } from './animais';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeUsuario: string): Observable<Animais>{
    return this.httpClient.get<Animais>(`${API}/${nomeUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<IAnimal>{
    return this.httpClient.get<IAnimal>(`${API}/photos/${id}`);
  }


}
