import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  url = 'https://backend-teleticket.onrender.com/api/eventos/';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteEvento(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createEvento(evento: Evento): Observable<any> {
    return this.http.post(this.url, evento);
  }

  getOneEvent(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateEvento(id: string, evento: Evento): Observable<any> {
    return this.http.put(this.url + id, evento);
  }
}
