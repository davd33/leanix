import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { retrieveGithubRepoDetailsAction } from 'src/app/app.actions';
import { AppShape, selectGithubRepoDetailsState } from 'src/app/app.state';

@Component({
  selector: 'app-github-detail',
  templateUrl: './github-detail.component.html',
  styleUrls: ['./github-detail.component.scss']
})
export class GithubDetailComponent implements OnInit {

  repoDetails$: Observable<any[]>;

  repoName = "";
  repoOwner = "";

  constructor(
    private store: Store<AppShape>,
    private route: ActivatedRoute) {

    this.repoDetails$ = this.store.select(selectGithubRepoDetailsState);
  }

  ngOnInit(): void {
    this.repoName = this.route.snapshot.params['name'];
    this.repoOwner = this.route.snapshot.params['owner'];
    this.store.dispatch(retrieveGithubRepoDetailsAction({repoOwner: this.repoOwner, repoName: this.repoName}));
  }

}
