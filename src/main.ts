import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { CarroListComponent } from './app/components/carro/carro-list/carro-list';

const routes = [
  { path: '', component: CarroListComponent },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
