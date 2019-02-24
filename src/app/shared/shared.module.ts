import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [MenuComponent]
})
export class SharedModule { }
