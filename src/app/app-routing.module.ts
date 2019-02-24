import { ContactComponent } from './logic/page-contact/page-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './logic/page-home/page-home.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  }, 
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
