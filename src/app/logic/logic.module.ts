import { MoviesService } from './services/movies.service';
import { LogicRoutingModule } from './logic-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PageVideoListComponent, 
    PageVideoProfileComponent,

  ],
  imports: [
    CommonModule, 
    LogicRoutingModule,
    HttpClientModule
  ],
  exports: [
    PageVideoListComponent, 
    PageVideoProfileComponent],
  
    providers: [MoviesService]
})
export class LogicModule { }
