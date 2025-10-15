import { Component, OnInit } from '@angular/core';
import { Carro } from '../../../models/carro.model';
import { CarroService } from '../../../services/carro.service';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-carro-list',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './carro-list.html',
  styleUrl: './carro-list.css'
})
export class CarroListComponent implements OnInit {
carros: Carro[] = [];

constructor(private carroService: CarroService) {}

ngOnInit() {
     this.carroService.exibirTodos().subscribe({
      next: (dados) => this.carros = dados,
      error: (err) => console.error('Erro ao carregar carros', err)
});

}

  deletar(id: number) {
    if (confirm('Deseja excluir este carro?')) {
      this.carroService.delete(id).subscribe(() => {
        this.carros = this.carros.filter(c => c.id !== id);
      });
    }
  }
}

