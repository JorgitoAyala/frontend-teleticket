import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { ToastrService } from 'ngx-toastr';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
})
export class CrearEventoComponent implements OnInit {
  eventoForm: FormGroup;
  titulo = 'Crear un nuevo evento';
  tituloBtn = 'Crear evento';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _eventoService: EventoService,
    private aRouter: ActivatedRoute
  ) {
    this.eventoForm = this.fb.group({
      evento: ['', Validators.required],
      ubicacion: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEvento() {
    const EVENTO: Evento = {
      evento: this.eventoForm.get('evento')?.value,
      ubicacion: this.eventoForm.get('ubicacion')?.value,
      categoria: this.eventoForm.get('categoria')?.value,
      descripcion: this.eventoForm.get('descripcion')?.value,
      precio: parseInt(this.eventoForm.get('precio')?.value),
      imagen: this.eventoForm.get('imagen')?.value,
    };

    if (this.id !== null) {
      //editamos evento
      this._eventoService.updateEvento(this.id, EVENTO).subscribe(
        (data) => {
          this.toastr.info(
            `El evento "${EVENTO.evento}", fue actualizado con éxito!`,
            'Evento Actualizado!',
            {
              positionClass: 'toast-bottom-right',
            }
          );
          this.router.navigate(['/listar-evento']);
        },
        (error) => {
          console.log(error);
          this.eventoForm.reset();
        }
      );
    } else {
      //agregamos evento
      console.log(EVENTO);
      this._eventoService.createEvento(EVENTO).subscribe(
        (data) => {
          this.toastr.success(
            `El evento "${EVENTO.evento}", fue registrado con éxito!`,
            'Evento Registrado!',
            {
              positionClass: 'toast-bottom-right',
            }
          );
          this.router.navigate(['/listar-evento']);
        },
        (error) => {
          console.log(error);
          this.eventoForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar el evento escogido';
      this.tituloBtn = 'Editar evento';
      this._eventoService.getOneEvent(this.id).subscribe((data) => {
        this.eventoForm.setValue({
          evento: data.evento,
          ubicacion: data.ubicacion,
          categoria: data.categoria,
          descripcion: data.descripcion,
          precio: data.precio,
          imagen: data.imagen,
        });
      });
    }
  }
}
