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
}
