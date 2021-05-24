import { ActionReducerMap, createSelector } from "@ngrx/store";
import { GithubShape, githubReducer, selectGithubRepositories, selectGithubRepoDetails} from "./github-repos.reducers";

export interface AppShape {
  githubState: GithubShape
}

export const reducers: ActionReducerMap<AppShape> = {
  githubState: githubReducer
}

/**
 * Global Selectors
 */


export const selectGithubState = (state: AppShape) => state.githubState
export const selectGithubRepositoriesState = createSelector(
  selectGithubState,
  selectGithubRepositories
)
export const selectGithubRepoDetailsState = createSelector(
  selectGithubState,
  selectGithubRepoDetails
)
