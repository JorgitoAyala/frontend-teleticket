import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.css'],
})
export class ListarEventosComponent implements OnInit, AfterViewInit {
  //DataPublished
  listaEventos: Evento[] = [];
  dialogEvento: Evento = INITDIALOG;
  showDialog: boolean = false;

  //Tabla
  displayedColumns: string[] = [
    'id',
    'evento',
    'categoria',
    'ubicacion',
    'precio',
    'actions',
  ];
  dataSource = new MatTableDataSource<Evento>(this.listaEventos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _eventoService: EventoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerEventos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerEventos() {
    this._eventoService.getEventos().subscribe(
      (data) => {
        console.log(data);
        this.dataSource = data.map((el: any, index: number) => {
          return {
            id: el._id,
            position: index + 1,
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

  btnDelete(id: string) {
    this._eventoService.deleteEvento(id).subscribe(
      (data) => {
        this.toastr.error(
          'El evento ha sido eliminado con éxito',
          'Evento eliminado!',
          {
            positionClass: 'toast-bottom-right',
          }
        );
        this.obtenerEventos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  btnView(id: string) {
    this.showDialog = true;
    this._eventoService.getOneEvent(id).subscribe(
      (data) => {
        console.log(data);
        this.dialogEvento = {
          evento: data.evento,
          ubicacion: data.ubicacion,
          categoria: data.categoria,
          descripcion: data.descripcion,
          precio: data.precio,
          imagen: data.imagen,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  btnClose() {
    this.showDialog = false;
    this.dialogEvento = INITDIALOG;
  }
}

const INITDIALOG: Evento = {
  evento: '',
  ubicacion: '',
  categoria: '',
  descripcion: '',
  precio: 0,
  imagen: '',
};
