import { BackgroundColorDirective } from './directives/background-color.directive';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent, 
    BackgroundColorDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    MenuComponent, 
    BackgroundColorDirective
  ]
})
export class SharedModule { }
