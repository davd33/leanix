import { createAction } from "@ngrx/store";

export const retrieveGithubReposAction = createAction("[App] Retrieve Github Repos Action",
  (payload: {token:string}) => payload);

export const retrieveGithubReposSuccessAction = createAction("[App] Retrieve Github Repos Success Action",
  (repositories: any[]) => ({repositories}));

export const retrieveGithubRepoDetailsAction = createAction("[App] Retrieve Github Repos Contributors Action",
  (payload: {repoOwner: string, repoName: string}) => payload);

export const retrieveGithubRepoDetailsSuccessAction = createAction("[App] Retrieve Github Repos Contributors Success Action",
  (details: any) => ({details}));
