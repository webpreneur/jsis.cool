import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { QuillModule, QuillConfigModule } from 'ngx-quill';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    CreateArticleComponent,
    DashboardComponent
  ],
  imports: [
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
