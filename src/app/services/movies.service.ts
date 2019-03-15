import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  /**
   *  Servicio que se encarga de apuntar a los diferentes endpoints del servidor dependiendo de la categoría
   *  que quiera ver el usuario y retorna ésta información al componente que lo requiera.
   */

  getPopularity() {
    return this.http.get('http://localhost:3000/popularity');
  }

  getBillboard() {
    return this.http.get('http://localhost:3000/billboard');
  }

  getBestRated() {
    return this.http.get('http://localhost:3000/bestrated');
  }

  getPopulartityChildren() {
    return this.http.get('http://localhost:3000/popularitychildren');
  }

  getBestYear() {
    return this.http.get('http://localhost:3000/bestyear');
  }

  getDrama() {
    return this.http.get('http://localhost:3000/drama');
  }

  getSearchMovie(movie: string) {
    return this.http.get(`http://localhost:3000/search/${movie}`);
  }

}
