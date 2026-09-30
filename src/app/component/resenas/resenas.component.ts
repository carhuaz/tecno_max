import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResenasService } from '../../services/resenas.service';

@Component({
  selector: 'app-resenas',
  standalone: false,
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.css']
})
export class ResenasComponent {
  private readonly resenasSrv = inject(ResenasService);

  readonly resenas = this.resenasSrv.resenas;
  readonly estrellasArr: number[] = [1, 2, 3, 4, 5];

  nueva = { cliente: '', producto: '', comentario: '', estrellas: 5 };

  enviar(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.resenasSrv.agregarResena({
      ...this.nueva,
      fecha: new Date().toISOString().split('T')[0]
    });

    this.nueva = { cliente: '', producto: '', comentario: '', estrellas: 5 };
    form.resetForm({ estrellas: 5 });
  }
}
