import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './component/angular/angular.component';


@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
