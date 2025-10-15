import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app'; // ajuste conforme o local correto
import { CarroListComponent } from './app/components/carro/carro-list/carro-list';


const routes = [
  { path: '', component: CarroListComponent },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
