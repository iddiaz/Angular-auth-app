import { Auth } from './services/auth.service';
import { APP_ROUTING } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
// "../node_modules/bootstrap/dist/css/bootstrap.min.css",

    // "../node_modules/jquery/dist/jquery.slim.min.js",
        // "../node_modules/tether/dist/js/tether.min.js",
        // "../node_modules/bootstrap/dist/js/bootstrap.min.js"