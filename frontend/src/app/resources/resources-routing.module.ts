import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
