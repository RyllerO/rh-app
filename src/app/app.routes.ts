import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CadastroCompetenciaComponent} from './components/cadastro-competencia/cadastro-competencia.component';
import {CabecalhoAvaliacaoComponent} from './components/cabecalho-avaliacao/cabecalho-avaliacao.component';

const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro-competencia', component: CadastroCompetenciaComponent},
  {path: 'cabecalho-avaliacao', component: CabecalhoAvaliacaoComponent},
];
