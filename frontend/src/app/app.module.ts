import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AngularModule } from "./modules/angular/angular.module";
import { BlogModule } from "./modules/blog/blog.module";
import { CleanCodeModule } from "./modules/clean-code/clean-code.module";
import { DenoModule } from "./modules/deno/deno.module";
import { SharedModule } from "./modules/shared/shared.module";
import { ScssModule } from "./modules/scss/scss.module";
import { ResourcesModule } from "./resources/resources.module";
import { AdminModule } from "./modules/admin/admin.module";
import { AuthModule } from "./modules/auth/auth.module";
import { HeaderModule } from "./modules/header/header.module";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    AdminModule,
    AngularModule,
    AuthModule,
    BlogModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    CleanCodeModule,
    DenoModule,
    HttpClientModule,
    ResourcesModule,
    ScssModule,
    SharedModule,
    HeaderModule,
    AppRoutingModule, // Must be at the end of the list, because of the wild card route!
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
