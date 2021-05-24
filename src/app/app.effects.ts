import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { retrieveGithubRepoDetailsAction, retrieveGithubRepoDetailsSuccessAction, retrieveGithubReposAction, retrieveGithubReposSuccessAction } from "./app.actions";
import { GraphQLService } from "./graphql.service";
import {exhaustMap, map} from 'rxjs/operators';
import { getPublicReposQuery } from "./gql.queries";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppEffects {
  constructor(
    readonly gql: GraphQLService,
    readonly actions$: Actions,
    readonly http: HttpClient) {}

  getGithubPublicRepos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(retrieveGithubReposAction),
      exhaustMap((action) => {
        return this.gql.fetch(getPublicReposQuery, action.token)
        .pipe(
          map((resp:any) => retrieveGithubReposSuccessAction(resp.data.search.edges))
        )
      })
    )
  })

  getGithubRepoDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(retrieveGithubRepoDetailsAction),
      exhaustMap((action) => {
        return this.http.get(`https://api.github.com/repos/${action.repoOwner}/${action.repoName}/contributors`, {
          headers: {
            Accept: 'application/vnd.github.v3+json'
          }
        })
        .pipe(
          map((resp:any) => retrieveGithubRepoDetailsSuccessAction(resp))
        )
      })
    )
  })
}
