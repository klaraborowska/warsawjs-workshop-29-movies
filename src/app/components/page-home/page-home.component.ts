import { Movies } from './../../logic/interfaces/movies.interface';
import { MoviesService } from './../../logic/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movies: Movies = null;

  ngOnInit() {
    this.fetchLatestMovies();
  }

  async fetchLatestMovies() {
    this.movies = await this.moviesService.fetchLatestMovies();
  }
}
