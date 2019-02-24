import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LogicModule } from './logic/logic.module';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent, 
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
