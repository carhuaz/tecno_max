import { Component, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  private readonly contactoSrv = inject(ContactoService);

  readonly mensajes = this.contactoSrv.mensajes;

  /** Controla la visibilidad de la alerta de éxito. */
  readonly exito = signal<boolean>(false);

  modelo = { nombre: '', email: '', asunto: '', mensaje: '' };

  enviar(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.contactoSrv.registrar(this.modelo);

    this.modelo = { nombre: '', email: '', asunto: '', mensaje: '' };
    form.resetForm();

    this.exito.set(true);
    setTimeout(() => this.exito.set(false), 4000);
  }

  cerrarAlerta(): void {
    this.exito.set(false);
  }
}
