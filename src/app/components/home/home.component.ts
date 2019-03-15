import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  title: string;
  description: string;
  movie: Movie;
  moviesArray: Movie[];
  // Permite visualizar listado de películas o una en particular
  showmovie: boolean;

  constructor(private moviesSvc: MoviesService, private router: Router) { }

  ngOnInit() {
    // Inicializamos la página con el listado de películas en cartelera
    this.showBillboard();
  }

  /**
   *  (1) Éstos métodos hacen un llamado a traves del servicio de la categoría que el usuario desea ver.
   *  (2) Define los atributos title, description dependiendo de la categoría solicitada.
   *  (3) Llena la variable de tipo arreglo de objetos con la información que proviene del servidor, recibirá
   *      20 elementos en su interior y serán iterados en el HTML
   */
  showPopularity() {
    this.showmovie = false;
    this.moviesArray = [];
    this.moviesSvc.getPopularity().subscribe(res => {
      if (res) {
        this.title = 'Populares';
        this.description = 'Peliculas más comentadas en redes sociales y con mayor afluencia de publico';
        this.moviesArray = res[0];
      }
    });
  }

  showBillboard() {
    this.showmovie = false;
    this.moviesArray = [];
    this.moviesSvc.getBillboard().subscribe(res => {
      if (res) {
        this.title = 'En cartelera';
        this.description = 'Peliculas que podras disfrutar en tu sala de cine más cercana';
        this.moviesArray = res[0];
      }
    });
  }

  showBestRated() {
    this.showmovie = false;
    this.moviesArray = [];
    this.moviesSvc.getBestRated().subscribe(res => {
      if (res) {
        this.title = 'Mejores puntuaciones';
        this.description = 'Peliculas que tienen las más altas votaciones en el ranking';
        this.moviesArray = res[0];
      }
    });
  }

  showPopulartityChildren() {
    this.showmovie = false;
    this.moviesArray = [];
    this.moviesSvc.getPopulartityChildren().subscribe(res => {
      if (res) {
        this.title = 'Populares entre los niños';
        this.description = 'Estas son las peliculas que los niños aman, llenando las salas de cine';
        this.moviesArray = res[0];
      }
    });
  }

  showBestYear() {
    this.showmovie = false;
    this.moviesArray = [];
    this.moviesSvc.getBestYear().subscribe(res => {
      if (res) {
        this.title = 'Lo mejor del año';
        this.description = 'Las peliculas mas importantes, con mejor valoración en el año 2018';
        this.moviesArray = res[0];
      }
    });
  }

  showDrama() {
    this.showmovie = false;
    this.moviesArray = [];
    this.moviesSvc.getDrama().subscribe(res => {
      if (res) {
        this.title = 'Drama';
        this.description = 'Mejores peliculas de drama de todos los tiempos';
        this.moviesArray = res[0];
      }
    });
  }

  /**
   *  (1) Éste método recibe un parametro tipo texto que es el nombre de la película que el usuario quiere buscar.
   *  (2) Define los atributo title dependiendo de la película solicitada y una descripción por defecto.
   *  (3) Llena la variable de tipo arreglo de objetos con la información que proviene del servidor, recibirá
   *      20 elementos en su interior y serán iterados en el HTML
   *  @param movie parametro recibido y luego enviado al servicio quien hará la solicitud del nombre de la película.
   */
  showSearchMovie(movie: string) {
    this.showmovie = false;
    this.moviesArray = [];
    this.moviesSvc.getSearchMovie(movie).subscribe(res => {
      if (res) {
        this.title = `Peliculas relacionadas con ${movie}`;
        this.description = 'Listado de peliculas:';
        this.moviesArray = res[0];
      }
    });
  }

  /**
   *  (1) Éste método recibe un parametro tipo Movie que contiene mas información de la pelicula y que sera pintada
   *      posteriormente en el HTML a partir del atributo movie.
   *  (2) Define los atributo title dependiendo de la película solicitada y una descripción por defecto.
   *  @param movie parametro recibido que contiene la información de la pelicula solicitada
   */
  openMovie(movie: Movie) {
    this.showmovie = true;
    this.movie = movie;
    this.title = movie.title;
    this.description = 'Información detallada de la pelicula';
  }

}
