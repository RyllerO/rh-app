import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './components/home/home.module';
import { TabelaAvaliacaoComponent } from './components/tabela-avaliacao/tabela-avaliacao.component';
import { CabecalhoAvaliacaoComponent } from './components/cabecalho-avaliacao/cabecalho-avaliacao.component';

@NgModule({
  imports: [
    BrowserModule,
    // habilita animacoes
    BrowserAnimationsModule,
    // desabilita animacoes
    // NoopAnimationsModule
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    HomeModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
  ],
  declarations: [AppComponent],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
