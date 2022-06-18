import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais, IAnimal } from './animais';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiUrl;
const NOT_MODIFIED = 304;


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

  excluiAnimal(id: number): Observable<IAnimal>{
    return this.httpClient.delete<IAnimal>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean>{
    return this.httpClient.post(`${API}/photos/${id}/like`, {}
    ,{observe: 'response' }).pipe(mapTo(true), catchError((error) => {
      return error.status === NOT_MODIFIED ? of(false) : throwError(error);
    }))
  }

   upload(descricao: string, permiteComentario: boolean, arquivo: File){
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.httpClient.post(`${API}/photos/upload`, formData,
    { observe: 'events',
      reportProgress: true,
    });

   }

}
