import { Injectable, signal } from '@angular/core';
import { Resena } from '../interface/resena';

@Injectable({ providedIn: 'root' })
export class ResenasService {
  private readonly resenasSignal = signal<Resena[]>([
    {
      id: 1,
      cliente: 'María González',
      producto: 'iPhone 15 Pro',
      comentario: 'Excelente calidad, llegó rápido.',
      estrellas: 5,
      fecha: '2026-09-10'
    },
    {
      id: 2,
      cliente: 'Carlos Ramírez',
      producto: 'MacBook Air M3',
      comentario: 'Muy liviana y potente.',
      estrellas: 5,
      fecha: '2026-09-08'
    },
    {
      id: 3,
      cliente: 'Lucía Torres',
      producto: 'AirPods Pro 2',
      comentario: 'La cancelación de ruido es increíble.',
      estrellas: 4,
      fecha: '2026-09-05'
    }
  ]);

  /** Solo lectura para los componentes: expone la señal sin permitir escrituras. */
  readonly resenas = this.resenasSignal.asReadonly();

  /** Contador monótono: evita colisiones de id que ocurriría con length + 1. */
  private siguienteId = 4;

  agregarResena(resena: Omit<Resena, 'id'>): void {
    const nueva: Resena = { ...resena, id: this.siguienteId++ };
    this.resenasSignal.update(lista => [...lista, nueva]);
  }

  eliminarResena(id: number): void {
    this.resenasSignal.update(lista => lista.filter(r => r.id !== id));
  }

  promedioEstrellas(): number {
    const lista = this.resenasSignal();
    if (lista.length === 0) {
      return 0;
    }
    const total = lista.reduce((suma, r) => suma + r.estrellas, 0);
    return Math.round((total / lista.length) * 10) / 10;
  }
}
