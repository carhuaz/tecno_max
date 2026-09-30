import { Injectable } from '@angular/core';
import { Oferta } from '../interface/oferta';

@Injectable({ providedIn: 'root' })
export class OfertasService {
  private readonly ofertas: Oferta[] = [
    {
      id: 1,
      titulo: 'Cyber Days TecnoMax',
      descripcion: 'Descuentos en toda la línea de celulares',
      descuento: 25,
      validoHasta: '30/11/2026'
    },
    {
      id: 2,
      titulo: 'Semana Gamer',
      descripcion: 'Laptops y accesorios para gaming',
      descuento: 15,
      validoHasta: '15/12/2026'
    },
    {
      id: 3,
      titulo: 'Hogar Inteligente',
      descripcion: 'Dispositivos inteligentes con envío gratis',
      descuento: 20,
      validoHasta: '31/12/2026'
    }
  ];

  obtenerOfertas(): Oferta[] {
    return this.ofertas;
  }

  obtenerOfertaPrincipal(): Oferta | undefined {
    return this.ofertas[0];
  }
}
