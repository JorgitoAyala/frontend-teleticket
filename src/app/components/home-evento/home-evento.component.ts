import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';

interface ListaEv {
  id?: string;
  evento: string;
  categoria: string;
  ubicacion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-home-evento',
  templateUrl: './home-evento.component.html',
  styleUrls: ['./home-evento.component.css'],
})
export class HomeEventoComponent implements OnInit {
  listaEventos: ListaEv[] = [];

  constructor(private _eventoService: EventoService) {}

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos() {
    this._eventoService.getEventos().subscribe(
      (data) => {
        console.log(data);
        this.listaEventos = data.map((el: any) => {
          return {
            id: el._id,
            evento: el.evento,
            categoria: el.categoria,
            ubicacion: el.ubicacion,
            precio: el.precio,
            imagen: el.imagen,
          };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
