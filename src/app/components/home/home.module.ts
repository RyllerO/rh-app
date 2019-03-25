import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {HomeComponent} from './home.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatTableModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})

export class HomeModule {


}
