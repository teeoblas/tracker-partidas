//interfaz


//definimos la interfaz
export interface Partida {
  id: number;         //id unica por partida
  mapa: string;       //registro del mapa jugado 
  resultado: string;  // Ej: "Victoria" o "Derrota"
  bajas: number;      //cantidad de asesinatos
  muertes: number;    //veces que murio 
}