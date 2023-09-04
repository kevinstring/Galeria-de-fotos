import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { VistaComponent } from './componentes/vista/vista.component';

const routes: Routes = [{
  path:"",component:InicioComponent
  
},
{path:"visualizar/:id",component:VistaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
