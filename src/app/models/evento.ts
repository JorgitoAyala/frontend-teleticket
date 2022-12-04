export class Evento {
  _id?: number;
  evento: string;
  ubicacion: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string;

  constructor(
    evento: string,
    ubicacion: string,
    categoria: string,
    descripcion: string,
    precio: number,
    imagen: string
  ) {
    this.evento = evento;
    this.ubicacion = ubicacion;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
  }
}
