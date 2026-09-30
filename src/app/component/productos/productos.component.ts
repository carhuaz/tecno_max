import { Component, computed, inject, signal } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CategoriasService } from '../../services/categorias.service';
import { Producto } from '../../interface/producto';
import { Categoria } from '../../interface/categoria';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  private readonly productosSrv = inject(ProductosService);
  private readonly categoriasSrv = inject(CategoriasService);

  readonly categorias: Categoria[] = this.categoriasSrv.obtenerCategorias();

  /** Signal con la categoría seleccionada ('' = todas). */
  readonly filtro = signal<string>('');

  /** computed: la lista filtrada se recalcula sola cuando cambia el filtro. */
  readonly productosFiltrados = computed<Producto[]>(() => {
    const categoria = this.filtro();
    const lista = this.productosSrv.obtenerProductos();
    return categoria ? lista.filter(p => p.categoria === categoria) : lista;
  });

  /** Imagen de respaldo si falla la carga desde Unsplash. */
  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src =
      'data:image/svg+xml;charset=UTF-8,' +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">' +
          '<rect width="400" height="200" fill="#e9ecef"/>' +
          '<text x="200" y="105" font-family="sans-serif" font-size="18" fill="#6c757d" ' +
          'text-anchor="middle">Sin imagen</text></svg>'
      );
  }
}
