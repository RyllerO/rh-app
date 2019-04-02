import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './components/home/home.module';

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
    FlexLayoutModule,
    HomeModule,
    MatTableModule
  ],
  declarations: [AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
