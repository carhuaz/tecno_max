import { Injectable } from '@angular/core';
import { Categoria } from '../interface/categoria';

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  private readonly categorias: Categoria[] = [
    {
      id: 1,
      nombre: 'Celulares',
      icono: 'bi-phone',
      descripcion: 'Últimos modelos en smartphones'
    },
    {
      id: 2,
      nombre: 'Laptops',
      icono: 'bi-laptop',
      descripcion: 'Equipos portátiles de alto rendimiento'
    },
    {
      id: 3,
      nombre: 'Accesorios',
      icono: 'bi-headphones',
      descripcion: 'Complementos para tus dispositivos'
    },
    {
      id: 4,
      nombre: 'Dispositivos Inteligentes',
      icono: 'bi-smartwatch',
      descripcion: 'Tecnología para tu hogar'
    }
  ];

  obtenerCategorias(): Categoria[] {
    return this.categorias;
  }

  obtenerNombres(): string[] {
    return this.categorias.map(c => c.nombre);
  }
}
