import { Component, OnInit } from '@angular/core';
import { Carro } from '../../../models/carro.model';
import { CarroService } from '../../../services/CarroService';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carro-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carro-list.html',
  styleUrl: './carro-list.css'
})
export class CarroListComponent implements OnInit {
  
  carros: Carro[] = []

  constructor(private carroService: CarroService) {}

  ngOnInit(): void {
   this.carroService.getCarros().subscribe(data => this.carros = data);   
  }
}
