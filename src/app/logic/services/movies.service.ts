import { Movies } from './../interfaces/movies.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  fetchMovies() {
    return this.http.get<Movies>(environment.moviesURL).toPromise();
  }

  async fetchMovieById(movieId) {
    const list = await this.fetchMovies();
    const movie =  list.find((movie)=>{
      return movie.id === movieId;
    })
    return movie;
  }

  fetchLatestMovies() {
    return this.http.get<Movies>(environment.latestMoviesURL).toPromise();
  }
}
