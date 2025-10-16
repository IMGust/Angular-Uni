import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarroListComponent } from './components/carro/carro-list/carro-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarroListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
