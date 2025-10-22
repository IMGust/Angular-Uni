import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro.model';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private baseUrl =   'http://localhost:8080/carros'
  
  
  constructor(private httpClient: HttpClient) {}

    getCarros(): Observable<Carro[]> {
      return this.httpClient.get<Carro[]>(this.baseUrl)
    }
}
