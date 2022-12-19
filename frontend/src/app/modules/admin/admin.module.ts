import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { QuillModule, QuillConfigModule } from 'ngx-quill';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CreateArticleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
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
