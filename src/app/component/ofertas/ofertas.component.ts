import { Component, inject } from '@angular/core';
import { OfertasService } from '../../services/ofertas.service';
import { Oferta } from '../../interface/oferta';

@Component({
  selector: 'app-ofertas',
  standalone: false,
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  private readonly ofertasSrv = inject(OfertasService);

  readonly ofertas: Oferta[] = this.ofertasSrv.obtenerOfertas();
}
