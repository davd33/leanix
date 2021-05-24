import { createAction } from "@ngrx/store";

export const retrieveGithubReposAction = createAction("[App] Retrieve Github Repos Action",
  (payload: {token:string}) => payload);

export const retrieveGithubReposSuccessAction = createAction("[App] Retrieve Github Repos Success Action",
  (repositories: any[]) => ({repositories}))
