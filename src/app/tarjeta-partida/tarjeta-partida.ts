import { Component, Input } from '@angular/core';
import { Partida } from '../partidas-list/partida'; 

@Component({
  selector: 'app-tarjeta-partida',
  standalone: false,
  templateUrl: './tarjeta-partida.html',
  styleUrl: './tarjeta-partida.scss'
})
export class TarjetaPartida {
  // Con esto le decimos: "Vas a recibir un objeto que cumple con la interfaz Partida"
  @Input() partida!: Partida;
}