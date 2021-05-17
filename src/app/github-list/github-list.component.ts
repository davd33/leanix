import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyGithubList } from '../app.state';
import { GetGithubList } from './state';

@Component({
    selector: 'app-github-list',
    templateUrl: './github-list.component.html',
    styleUrls: ['./github-list.component.scss']
})
export class GithubListComponent implements OnInit {

    githubList$!: Observable<any>;

    constructor(
        private store: Store<AppState>) { }

    ngOnInit(): void {
        this.newGithubList();
        this.githubList$ = this.store.pipe(select(getMyGithubList));
    }

    newGithubList() {
        this.store.dispatch(new GetGithubList(null));
    }

}
