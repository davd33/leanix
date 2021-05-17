import { ActionReducerMap } from "@ngrx/store";
import * as githubListStore from "./github-list/state";

export interface AppState {
    githubList: githubListStore.State;
}

export const initialState: AppState = {
    githubList: githubListStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
    githubList: githubListStore.reducer
}

export const getMyGithubList = (s: AppState) => s.repositories;
