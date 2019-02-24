import { MoviesService } from './../../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  async getMovies() {
    const response = await this.moviesService.fetchMovies();
    console.log(response)
    return response;
  }
}
