import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { OfertasComponent } from './component/ofertas/ofertas.component';
import { ResenasComponent } from './component/resenas/resenas.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { ContactoComponent } from './component/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    CategoriasComponent,
    OfertasComponent,
    ResenasComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
