import { Component, inject } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../interface/categoria';

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  private readonly categoriasSrv = inject(CategoriasService);

  readonly categorias: Categoria[] = this.categoriasSrv.obtenerCategorias();
}
