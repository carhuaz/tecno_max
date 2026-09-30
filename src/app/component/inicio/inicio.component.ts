import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CategoriasService } from '../../services/categorias.service';
import { OfertasService } from '../../services/ofertas.service';
import { Producto } from '../../interface/producto';
import { Categoria } from '../../interface/categoria';
import { Oferta } from '../../interface/oferta';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  private readonly productosSrv = inject(ProductosService);
  private readonly categoriasSrv = inject(CategoriasService);
  private readonly ofertasSrv = inject(OfertasService);

  readonly destacados: Producto[] = this.productosSrv.obtenerProductos().slice(0, 4);
  readonly categorias: Categoria[] = this.categoriasSrv.obtenerCategorias();
  readonly ofertas: Oferta[] = this.ofertasSrv.obtenerOfertas();
}
