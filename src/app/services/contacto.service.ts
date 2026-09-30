import { Injectable, signal } from '@angular/core';
import { MensajeContacto } from '../interface/mensaje-contacto';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  private readonly mensajesSignal = signal<MensajeContacto[]>([]);

  /** Solo lectura para los componentes: expone la señal sin permitir escrituras. */
  readonly mensajes = this.mensajesSignal.asReadonly();

  /** Contador monótono: evita colisiones de id que ocurriría con length + 1. */
  private siguienteId = 1;

  registrar(mensaje: Omit<MensajeContacto, 'id' | 'fecha'>): void {
    const nuevo: MensajeContacto = {
      ...mensaje,
      id: this.siguienteId++,
      fecha: new Date().toLocaleString('es-PE')
    };
    this.mensajesSignal.update(lista => [...lista, nuevo]);
  }

  totalMensajes(): number {
    return this.mensajesSignal().length;
  }
}
