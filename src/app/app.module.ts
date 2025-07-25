import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './MainComponets/nav-bar/nav-bar.component';
import { FooterComponent } from './MainComponets/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interceptor';
import { FormComponent } from './Componets/form/form.component';
import { DomandaComponent } from './Componets/domanda/domanda.component';
import { DecodeHtmlPipe } from './decode-html.pipe';
import { StartComponent } from './Pages/start/start.component';
import { IstruzioniComponent } from './Componets/istruzioni/istruzioni.component';
import { RisultatiComponent } from './Componets/risultati/risultati.component';
import { StoricoComponent } from './Pages/storico/storico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    DomandaComponent,
    DecodeHtmlPipe,
    StartComponent,
    IstruzioniComponent,
    RisultatiComponent,
    StoricoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

   {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
