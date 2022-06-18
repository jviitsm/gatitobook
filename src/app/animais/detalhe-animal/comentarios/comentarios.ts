export interface IComentario {
  date: Date,
  text: string,
  userName: string,
}

export type Comentarios = Array<IComentario>
