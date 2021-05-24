import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { retrieveGithubReposAction } from './app.actions';
import { AppShape } from './app.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'leanix-test';
    clientId: string = environment.CLIENT_ID;
    githubAuthUrl: string = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&scope=user%20public_repo%20repo%20repo_deployment%20repo:status%20read:repo_hook%20read:org%20read:public_key%20read:gpg_key`;
    githubToken: Subject<string> = new Subject();

    constructor(
      private http: HttpClient,
      private location: Location,
      private store: Store<AppShape>) {
    }

    ngOnInit() {

      const code: string|null = new URLSearchParams(this.location.path()).get('code');

      if (!!code && !this.githubToken.closed) {
        this.http.get(`http://localhost:3000/my-oauth?code=${code}`)
          .subscribe(
            r => {
              const resp: any = r;
              const token = new URL(resp.result).searchParams.get('access_token')

              this.githubToken.next(token || undefined);
            },
            error => {
              throw new Error(JSON.stringify(error));
            })
      }

      this.githubToken.subscribe(token => {
        if (!token) return;

        this.store.dispatch(retrieveGithubReposAction({token}));

        this.githubToken.unsubscribe();
      })
    }
}
