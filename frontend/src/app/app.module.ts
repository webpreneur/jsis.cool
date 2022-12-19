import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularModule } from './modules/angular/angular.module';
import { BlogModule } from './modules/blog/blog.module';
import { CleanCodeModule } from './modules/clean-code/clean-code.module';
import { DenoModule } from './modules/deno/deno.module';
import { SharedModule } from './modules/shared/shared.module';
import { ResourcesModule } from './resources/resources.module';
import { AdminModule } from './modules/admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    BlogModule,
    AngularModule,
    CleanCodeModule,
    DenoModule,

    ResourcesModule,
    AdminModule,
    BrowserAnimationsModule, 
    AppRoutingModule, // Must be at the end of the list, because of the wild card route!
  ],
    providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
