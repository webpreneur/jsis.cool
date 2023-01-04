import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateArticleComponent } from "./components/create-article/create-article.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "admin",
    component: DashboardComponent,
  },
  /* TODO: Make this work as in the "children"'s list of the "admin" path! */
  {
    path: "admin/create-article",
    component: CreateArticleComponent,
  },
  {
    path: "admin/edit/:id",
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
