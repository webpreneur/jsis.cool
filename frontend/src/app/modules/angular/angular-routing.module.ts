import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../blog/components/post/post.component';
import { AngularComponent } from './components/angular/angular.component';

const routes: Routes = [
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'angular/:title',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
