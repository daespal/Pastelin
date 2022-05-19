import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';

const routes: Routes = [
  {path: 'crearcuenta', component: CrearCuentaComponent},
  {path: 'iniciarsesion', component: IniciarsesionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
