import { Component, OnInit } from '@angular/core';
import { PartidasService } from '../partidas'; // <-- Importamos el servicio

@Component({
  selector: 'app-partidas-list',
  standalone: false,
  templateUrl: './partidas-list.html',
  styleUrl: './partidas-list.scss'
})
export class PartidasList implements OnInit {

  // guardar la lista que nos devuelva el servicio
  listaDePartidas: any[] = [];

  // Inyectamos el servicio
  constructor(private partidasService: PartidasService) { }

  // se ejecuta automáticamente cuando vas a pantalla del historial
  ngOnInit() {
    this.listaDePartidas = this.partidasService.obtenerPartidas();
  }
}