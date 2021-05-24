import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-github-list',
    templateUrl: './github-list.component.html',
    styleUrls: ['./github-list.component.scss']
})
export class GithubListComponent implements OnInit {

    githubList$!: Observable<any>;

    constructor() { }

    ngOnInit(): void {
    }

}
