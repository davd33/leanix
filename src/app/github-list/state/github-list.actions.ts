import { Action } from "@ngrx/store";


export const GET_GITHUB_LIST = 'Get new github list';

export class GetGithubList implements Action {
    readonly type: string = GET_GITHUB_LIST;

    constructor(public payload: any) {
        console.log(`ACTION ${GET_GITHUB_LIST}`);
    }

}

export type GithubListAction = GetGithubList;
