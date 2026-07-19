import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PartidasService } from '../partidas'; // <-- 1. Importamos el servicio

@Component({
  selector: 'app-nueva-partida',
  standalone: false,
  templateUrl: './nueva-partida.html',
  styleUrl: './nueva-partida.scss'
})
export class NuevaPartida {

  formularioPartida = new FormGroup({
    mapa: new FormControl('', Validators.required),
    resultado: new FormControl('', Validators.required),
    bajas: new FormControl(0, [Validators.required, Validators.min(0)]),
    muertes: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  // 2. Inyectamos el servicio acá adentro de los paréntesis
  constructor(private partidasService: PartidasService) { }

  guardar() {
    if (this.formularioPartida.valid) {
      // 3. Le pasamos los datos al servicio en vez de solo imprimirlos
      this.partidasService.agregarPartida(this.formularioPartida.value);

      // Limpiamos el formulario
      this.formularioPartida.reset();
    }
  }
}