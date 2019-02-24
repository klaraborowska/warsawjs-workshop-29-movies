import { Movie } from './../../interfaces/movie.interface';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-video-profile',
  templateUrl: './page-video-profile.component.html',
  styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }
  movieId: string;
  movie: Movie;

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    this.getMovie(this.movieId);
  }

  async getMovie(id) {
    this.movie = await this.movieService.fetchMovieById(id);
  }

}
