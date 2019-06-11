import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {HomeComponent} from './home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppModule} from '../../app.module';
import {TabelaAvaliacaoComponent} from '../tabela-avaliacao/tabela-avaliacao.component';
import {CadastroCompetenciaComponent} from '../cadastro-competencia/cadastro-competencia.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routing} from '../../app.routing';
import {CommonModule} from '@angular/common';

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
    routing,
    CommonModule,
    MatAutocompleteModule,
    MatSelectModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    TabelaAvaliacaoComponent,
    CadastroCompetenciaComponent,
  ],
  exports: [HomeComponent],
})

export class HomeModule {


}
