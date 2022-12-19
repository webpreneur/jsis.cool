import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { QuillModule, QuillConfigModule } from 'ngx-quill';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    CreateArticleComponent,
    DashboardComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    AdminRoutingModule,
    QuillModule.forRoot({
      suppressGlobalRegisterWarning: true
    }),
    QuillConfigModule.forRoot({
      modules: {
        syntax: true,
        // toolbar: [...]
      }
    }),
  ]
})
export class AdminModule { }
