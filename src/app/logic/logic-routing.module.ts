import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageVideoNotFoundComponent } from '../components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';

const routes: Routes = [
  {
    path: 'videoList',
    component: PageVideoListComponent
  }, 
  {
    path: 'videoProfile',
    component: PageVideoProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
