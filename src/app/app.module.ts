import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './shared/component/barra/barra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiciosVentaComponent } from './servicios-venta/servicios-venta.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'
import { environment } from 'src/environments/environment';
import { DataDbService } from './services/data-db.service';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { SesionDbService } from './services/sesion-db.service';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ServiciosVentaComponent,
    InformacionComponent,
    CrearCuentaComponent,
    IniciarsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,

  ],
  providers: [DataDbService, SesionDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
