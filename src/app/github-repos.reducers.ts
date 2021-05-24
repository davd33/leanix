import { createReducer, on } from "@ngrx/store";
import { retrieveGithubReposSuccessAction } from "./app.actions";

export interface GithubShape {
  repositories: any[];
}

export const selectGithubRepositories = (state: GithubShape) => state.repositories;
export const githubInitialState: GithubShape = {repositories: []};
export const githubReducer = createReducer(
  githubInitialState,
  on(retrieveGithubReposSuccessAction, (state, action): GithubShape => {
    return {
      ...state,
      repositories: action.repositories
    }
  })
)
