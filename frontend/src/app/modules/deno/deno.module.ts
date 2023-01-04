import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DenoRoutingModule } from "./deno-routing.module";
import { DenoComponent } from "./components/deno/deno.component";

@NgModule({
  declarations: [
    DenoComponent,
  ],
  imports: [
    CommonModule,
    DenoRoutingModule,
  ],
})
export class DenoModule {}
