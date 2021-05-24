import { createReducer, on } from "@ngrx/store";
import { retrieveGithubRepoDetailsSuccessAction, retrieveGithubReposSuccessAction } from "./app.actions";

export interface GithubShape {
  repositories: any[];
  repoDetails: any;
}

export const selectGithubRepositories = (state: GithubShape) => state.repositories;
export const selectGithubRepoDetails = (state: GithubShape) => state.repoDetails;

export const githubInitialState: GithubShape = {repositories: [], repoDetails: {}};

export const githubReducer = createReducer(
  githubInitialState,
  on(retrieveGithubReposSuccessAction, (state, action): GithubShape => {
    return {
      ...state,
      repositories: action.repositories
    }
  }),
  on(retrieveGithubRepoDetailsSuccessAction, (state, action): GithubShape => {
    return {
      ...state,
      repoDetails: action.details
    }
  })
)
