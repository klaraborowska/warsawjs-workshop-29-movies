import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home/page-home.component';
import { ContactComponent } from './page-contact/page-contact.component';

@NgModule({
  declarations: [PageHomeComponent, ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [PageHomeComponent, ContactComponent]
})
export class LogicModule { }
