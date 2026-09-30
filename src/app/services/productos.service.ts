import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private readonly productos: Producto[] = [
    {
      id: 1,
      nombre: 'iPhone 15 Pro',
      precio: 4299,
      imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      categoria: 'Celulares',
      descripcion: 'Smartphone Apple con chip A17 Pro'
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S24',
      precio: 3899,
      imagen: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
      categoria: 'Celulares',
      descripcion: 'Pantalla AMOLED de 6.8 pulgadas'
    },
    {
      id: 3,
      nombre: 'MacBook Air M3',
      precio: 5499,
      imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      categoria: 'Laptops',
      descripcion: 'Laptop ultraligera Apple'
    },
    {
      id: 4,
      nombre: 'Dell XPS 15',
      precio: 4799,
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      categoria: 'Laptops',
      descripcion: 'Laptop profesional Dell'
    },
    {
      id: 5,
      nombre: 'AirPods Pro 2',
      precio: 899,
      imagen: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400',
      categoria: 'Accesorios',
      descripcion: 'Audífonos inalámbricos con cancelación de ruido'
    },
    {
      id: 6,
      nombre: 'Mouse Logitech MX',
      precio: 349,
      imagen: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
      categoria: 'Accesorios',
      descripcion: 'Mouse ergonómico inalámbrico'
    },
    {
      id: 7,
      nombre: 'Apple Watch Series 9',
      precio: 1599,
      imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
      categoria: 'Dispositivos Inteligentes',
      descripcion: 'Reloj inteligente con sensor ECG'
    },
    {
      id: 8,
      nombre: 'Google Nest Hub',
      precio: 599,
      imagen: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400',
      categoria: 'Dispositivos Inteligentes',
      descripcion: 'Pantalla inteligente para el hogar'
    }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerPorCategoria(categoria: string): Producto[] {
    return this.productos.filter(p => p.categoria === categoria);
  }

  obtenerPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
