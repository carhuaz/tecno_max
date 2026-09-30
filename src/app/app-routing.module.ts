import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { OfertasComponent } from './component/ofertas/ofertas.component';
import { ResenasComponent } from './component/resenas/resenas.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { ContactoComponent } from './component/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'resenas', component: ResenasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
