import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/model';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(movie: Movie, args?: any): any {

    /**
     *  (1) Éste pipe nos permite hacer la visualización de la imagen que viene de la api y nos permite la manipulación
     *     del tamaño de la misma, en este caso la definí en 300px de ancho.
     *  (2) Hacemos una verificación de la imagen que llega por url sí exista, de lo contrario asignamos una por defecto.
     */

    const url = 'http://image.tmdb.org/t/p/w300';

    if (movie.backdrop_path) {
      return `${url}/${movie.backdrop_path}`;
    } else if (movie.poster_path) {
      return `${url}/${movie.poster_path}`;
    } else {
      return '../../assets/noimage.jpg';
    }

  }

}
