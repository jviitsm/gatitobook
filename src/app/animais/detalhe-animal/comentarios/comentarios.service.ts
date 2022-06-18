import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Comentarios, IComentario } from './comentarios';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient: HttpClient) { }

  buscaComentario(id: number): Observable<Comentarios>{
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<IComentario>{
    return this.httpClient.post<IComentario>(`${API}/photos/${id}/comments`, {commentText});
  }

}
