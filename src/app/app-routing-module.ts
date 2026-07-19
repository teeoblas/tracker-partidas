import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasList } from './partidas-list/partidas-list';
import { NuevaPartida} from './nueva-partida/nueva-partida';


//definimos rutas historial y carga
const routes: Routes = [
  { path: 'historial', component: PartidasList },
  { path: 'cargar', component: NuevaPartida },
  { path: '', redirectTo: '/historial', pathMatch: 'full' } // para llevar al historial por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }