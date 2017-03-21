import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';


//routing
import { APP_ROUTING } from './app.routes';

//validation
import { Auth } from './services/auth.service';

//Solucion de error para versiones actuales de angular-cli:
//Podemos comentar el modulo importado ya que en la aplicación actualmente no se está usando y listo.
// import { AUTH_PROVIDERS } from 'angular2-jwt';

// O usarlo de esta forma:
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory( http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options );
}

//components
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
  providers: [Auth,
  // AUTH_PROVIDERS,
  {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [ Http, RequestOptions ]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
