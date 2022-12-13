import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenoComponent } from './components/deno/deno.component';

const routes: Routes = [{ path: 'deno', component: DenoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenoRoutingModule { }
