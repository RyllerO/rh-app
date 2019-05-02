import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CadastroCompetenciaComponent} from './components/cadastro-competencia/cadastro-competencia.component';
import {ModuleWithProviders} from '@angular/core';

const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro-competencia', component: CadastroCompetenciaComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);
