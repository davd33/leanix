import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'leanix-test';
    clientId: string = environment.CLIENT_ID;
    githubAuthUrl: string = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&scope=user`;
    githubToken: Subject<string> = new Subject();

    constructor(
      private http: HttpClient,
      private location: Location) {
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

        this.http.post('https://api.github.com/graphql', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          query: `{
            search(query: "is:public", type: REPOSITORY, first: 50) {
              repositoryCount
              pageInfo {
                endCursor
                startCursor
              }
              edges {
                node {
                  ... on Repository {
                    name
                    id
                  }
                }
              }
            }
          }`,
          variables: {}
        }).subscribe(
          r => {
            console.log(r);
            this.githubToken.complete();
          });
      })
    }
}
