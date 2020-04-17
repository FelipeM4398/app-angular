import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionesComponent } from './components/regiones/regiones.component';

const routes: Routes = [{ path: 'regiones', component: RegionesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
