import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { VistaComponent } from './componentes/vista/vista.component';
import { HttpClientModule} from "@angular/common/http"
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { GaleriaPipePipe } from './pipes/galeria-pipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    VistaComponent,
    GaleriaPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
