import { MoviesService } from './services/movies.service';
import { LogicRoutingModule } from './logic-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoListComponent } from './components/page-video-list/video-list/video-list.component';
import { VideoListItemComponent } from './components/page-video-list/video-list-item/video-list-item.component';

@NgModule({
  declarations: [
    PageVideoListComponent, 
    PageVideoProfileComponent, 
    VideoListComponent, 
    VideoListItemComponent,

  ],
  imports: [
    CommonModule, 
    LogicRoutingModule,
    HttpClientModule
  ],

  providers: [MoviesService]
})
export class LogicModule { }
