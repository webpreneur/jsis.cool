import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { QuillModule } from 'ngx-quill';
import { QuillConfigModule } from 'ngx-quill/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularModule } from './modules/angular/angular.module';
import { BlogModule } from './modules/blog/blog.module';
import { CleanCodeModule } from './modules/clean-code/clean-code.module';
import { DenoModule } from './modules/deno/deno.module';
import { SharedModule } from './modules/shared/shared.module';

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
    QuillModule.forRoot({
      suppressGlobalRegisterWarning: true
    }),
    QuillConfigModule.forRoot({
      modules: {
        syntax: true,
        // toolbar: [...]
      }
    }),
    AppRoutingModule, // Must be at the end of the list, because of the wild card route!
    /* TODO: Move this into a seperate module */
    HighlightModule,
  ],
    /* TODO: Move this into a seperate module */
    providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // @ts-ignore
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
