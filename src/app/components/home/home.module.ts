import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {HomeComponent} from './home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppModule} from '../../app.module';
import {CabecalhoAvaliacaoComponent} from '../cabecalho-avaliacao/cabecalho-avaliacao.component';
import {TabelaAvaliacaoComponent} from '../tabela-avaliacao/tabela-avaliacao.component';
import {CadastroCompetenciaComponent} from '../cadastro-competencia/cadastro-competencia.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routing} from '../../app.routing';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    HomeComponent,
    CabecalhoAvaliacaoComponent,
    TabelaAvaliacaoComponent,
    CadastroCompetenciaComponent,
  ],
  exports: [HomeComponent],
})

export class HomeModule {


}
