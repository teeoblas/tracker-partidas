import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // hacemos que el servicio este diosponible en toda la pagina
})
export class PartidasService {

  // Acá es donde van a vivir las partidas mientras usamos la app
  private partidasCargadas: any[] = [];

  constructor() { }

  // funcion para guardar datos 
  agregarPartida(nuevaPartida: any) {
    this.partidasCargadas.push(nuevaPartida);
    console.log('Servicio: Partida guardada con éxito', this.partidasCargadas);
  }

  // pedir la lista completa
  obtenerPartidas() {
    return this.partidasCargadas;
  }
}