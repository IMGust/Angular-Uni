// src/app/services/carro.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro.model';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private apiUrl = 'http://localhost:8080/carro';

  constructor(private http: HttpClient) {}

  /** 🟢 Criar um novo carro */
  incluir(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${this.apiUrl}`, carro);
  }

  /** 🟡 Atualizar um carro existente */
  update(id: number, carro: Carro): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, carro);
  }

  /** 🔴 Excluir um carro pelo ID */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /** 🔵 Buscar todos os carros */
  exibirTodos(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.apiUrl}`);
  }

  /** 🟣 Buscar carros por nome */
  buscarPorNome(nome: string): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.apiUrl}/nome/${nome}`);
  }

  /** ⚪ Buscar carro por ID */
  findById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.apiUrl}/buscar/${id}`);
  }
}
