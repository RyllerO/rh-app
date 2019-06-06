import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './components/home/home.module';
import {routing} from './app.routing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CompetenciaService} from './components/uteis/uteis-service/competencia.service';
import {ApiService} from './components/uteis/uteis-service/api.service';
import {CommonModule} from '@angular/common';

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
    routing,
    HttpClientModule,
    CommonModule
  ],
  declarations: [AppComponent],
  providers: [HttpClient, CompetenciaService, ApiService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
