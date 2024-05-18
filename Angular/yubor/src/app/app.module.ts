import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiqarComponent } from './companents/chiqar/chiqar.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './companents/first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    ChiqarComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
