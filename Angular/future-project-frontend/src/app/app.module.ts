import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './companentas/navbar/navbar.component';
import { GetByIdComponent } from './companentas/get-by-id/get-by-id.component';
import { CreateComponent } from './companentas/create/create.component';
import { UpdateComponent } from './companentas/update/update.component';
import { DeleteComponent } from './companentas/delete/delete.component';
import { GetallComponent } from './getall/getall.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetByIdComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    GetallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
