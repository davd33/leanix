import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubDetailComponent } from './github-list/github-detail/github-detail.component';
import { GithubListComponent } from './github-list/github-list.component';

const routes: Routes = [
  {path: 'github-list', component: GithubListComponent},
  {path: 'github-detail/:owner/:name', component: GithubDetailComponent},
  {path: '', redirectTo: 'github-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
