import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
// 1. Acá le enseñamos a Angular qué son los formularios
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PartidasList } from './partidas-list/partidas-list';
import { NuevaPartida } from './nueva-partida/nueva-partida';
import { TarjetaPartida } from './tarjeta-partida/tarjeta-partida';

@NgModule({
  declarations: [App, PartidasList, NuevaPartida, TarjetaPartida],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule { }
