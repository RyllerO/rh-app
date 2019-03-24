import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})

export class HomeModule {


}
