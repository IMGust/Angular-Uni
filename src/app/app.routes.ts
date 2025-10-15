import { Routes } from '@angular/router';
import { CarroListComponent} from './components/carro/carro-list/carro-list';
import { Paginainicial} from './pagina_inicial/home';

export const routes: Routes = [
  { path: '/carro', component: CarroListComponent },
  { path: '', component: Paginainicial}, // rota raiz
];

