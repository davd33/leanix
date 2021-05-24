import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { retrieveGithubReposAction, retrieveGithubReposSuccessAction } from "./app.actions";
import { GraphQLService } from "./graphql.service";
import {exhaustMap, map} from 'rxjs/operators';
import { getPublicReposQuery } from "./gql.queries";

@Injectable()
export class AppEffects {
  constructor(
    readonly gql: GraphQLService,
    readonly actions$: Actions) {}

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
}
