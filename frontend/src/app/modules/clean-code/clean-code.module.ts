import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CleanCodeRoutingModule } from './clean-code-routing.module';
import { CleanCodeComponent } from './components/clean-code/clean-code.component';


@NgModule({
  declarations: [
    CleanCodeComponent
  ],
  imports: [
    CommonModule,
    CleanCodeRoutingModule
  ]
})
export class CleanCodeModule { }
