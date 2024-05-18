import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeInTwoComponent } from './Pages/home/home-in-two/home-in-two.component';
import { HomeInOneComponent } from './Pages/home/home-in-one/home-in-one.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ErrorComponent } from './Pages/error/error.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { SpasiboComponent } from './Pages/spasibo/spasibo.component';
import { AdresDostavkiComponent } from './Pages/adres-dostavki/adres-dostavki.component';
import { OplataComponent } from './Pages/oplata/oplata.component';
import { DostavkaComponent } from './Pages/dostavka/dostavka.component';
import { HomeInThreeComponent } from './Pages/home/home-in-three/home-in-three.component';
import { HomeInFourComponent } from './Pages/home/home-in-four/home-in-four.component';
import { HomeInFiveComponent } from './Pages/home/home-in-five/home-in-five.component';
import { HomeInEightComponent } from './Pages/home/home-in-eight/home-in-eight.component';
import { HomeInNineComponent } from './Pages/home/home-in-nine/home-in-nine.component';
import { HomeInSevenComponent } from './Pages/home/home-in-seven/home-in-seven.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeInTwoComponent,
    HomeInOneComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    KontaktComponent,
    SpasiboComponent,
    AdresDostavkiComponent,
    OplataComponent,
    DostavkaComponent,
    HomeInThreeComponent,
    HomeInFourComponent,
    HomeInFiveComponent,
    HomeInEightComponent,
    HomeInNineComponent,
    HomeInSevenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
