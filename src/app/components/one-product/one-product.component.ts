import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent {
  imagenPg = '';
  descripcionPg = '';
  id: string | null;

  constructor(
    private _eventoService: EventoService,
    private aRouter: ActivatedRoute
  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.oneEvent();
  }

  oneEvent() {
    if (this.id !== null) {
      this._eventoService.getOneEvent(this.id).subscribe((data) => {
        console.log(data);
        this.imagenPg = data.imagen;
        this.descripcionPg = data.descripcion;
      });
    }
  }
}
