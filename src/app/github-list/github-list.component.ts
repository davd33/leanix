import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppShape, selectGithubRepositoriesState } from '../app.state';

@Component({
    selector: 'app-github-list',
    templateUrl: './github-list.component.html',
    styleUrls: ['./github-list.component.scss']
})
export class GithubListComponent implements OnInit {

  githubRepos$: Observable<any[]>;

  constructor(private store: Store<AppShape>,
      private router: Router) {
    this.githubRepos$ = this.store.select(selectGithubRepositoriesState);
  }

  ngOnInit(): void {
  }

  openDetailView(githubRepoOwnerLogin: string, githubRepoName: string) {
    this.router.navigate(['/github-detail', githubRepoOwnerLogin, githubRepoName]);
  }
}
