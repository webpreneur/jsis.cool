import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitComponent } from './components/git/git.component';
import { TaggingComponent } from './components/tagging/tagging.component';



@NgModule({
  declarations: [
    GitComponent,
    TaggingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GitModule { }
