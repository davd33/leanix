import { ActionReducerMap } from "@ngrx/store";
import * as githubList from "./github-list/state";

export interface AppState {
    githubList: githubList.State;
}

export const initialState: AppState = {
    githubList: githubList.initialState
}

export const reducers: ActionReducerMap<AppState, githubList.GithubListAction> = {
    githubList: githubList.reducer
}

export const getMyGithubList = (s: AppState) => s.githubList;
