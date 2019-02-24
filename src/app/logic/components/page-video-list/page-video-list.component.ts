import { Movies } from './../../interfaces/movies.interface';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})

export class PageVideoListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  public movies: Movies = null;
  public moviesCopy: Movies = null;
  

  ngOnInit() {
    this.getMovies();
  }

  async getMovies() {
    this.movies = await this.moviesService.fetchMovies();
    this.moviesCopy = await this.movies;
  }

  onKey(val) {
    this.movies = this.moviesCopy.filter(el => {
      return el.title.toLowerCase().includes(val);
    })
  }
}
