import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearRegistroComponent } from './Components/registro/crear-registro/crear-registro.component';
import { RegistroComponent } from './Components/registro/registro.component';

const routes: Routes = [
  {
    path:'', component: RegistroComponent
  },
  {
    path:'crear', component: CrearRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
